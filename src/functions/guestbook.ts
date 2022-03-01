import { Handler } from "@netlify/functions"
import fetch from "node-fetch"

export type GuestbookData = {
  created_at: string
  data: {
    first_name: string
    last_name: string
    message: string
  }
}

export const handler: Handler = async (event, context) => {
  try {
    const data: any = await (
      await fetch(
        `https://api.netlify.com/api/v1/sites/${process.env.SITE_ID}/forms/${process.env.NETLIFY_FORM_ID}/submissions`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NETLIFY_TOKEN}`,
          },
        }
      )
    ).json()

    return {
      statusCode: 200,
      body: JSON.stringify(
        data.map(({created_at, data: {first_name, last_name, message}}: GuestbookData) => {
          return { created_at, first_name, last_name, message }
        }).sort((a: GuestbookData, b: GuestbookData) => b.created_at.localeCompare(a.created_at))
      ),
    }
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "An unexpected error has occurred",
      }),
    }
  }
}
