import type { NextApiRequest, NextApiResponse } from "next"
import { createClient } from "@supabase/supabase-js"
import Filter from "bad-words"

export type GuestbookData = {
  created_at: string
  name: string
  message: string
}

type Error = {
  error: string
}

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.SUPABASE_SERVICE_ROLE_KEY
) {
  console.error("Environment vars missing")
  process.exit(-1)
}

const filter = new Filter()
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GuestbookData | Error>
) {
  if (req.method === "POST") {
    const { first_name, last_name, message, sheesh } = req.body

    if (
      sheesh ||
      !first_name ||
      !last_name ||
      !message ||
      message.length < 25 ||
      message.length > 280 ||
      filter.isProfane(message.toLowerCase().replace(/\b/g, ""))
    ) {
      res.status(500).redirect("/guestbook")
      return
    }

    const { data, error } = await supabase
      .from("guestbook")
      .insert([{ name: first_name + " " + last_name, message }])

    if (error) {
      console.error(error)
      res.status(500).redirect("/guestbook")
    } else {
      res.status(200).redirect("/guestbook?success=true")
    }
  } else if (req.method === "GET") {
    const { data: guestbook, error } = await supabase
      .from("guestbook")
      .select()
      .order("created_at", { ascending: false })

    if (error) {
      console.error(error)
      res.status(500).json({ error: "An unexpected error has occurred" })
    } else {
      res.status(200).json(guestbook as any as GuestbookData)
    }
  }
}
