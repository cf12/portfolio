import { Handler } from "@netlify/functions"
import fetch from "node-fetch"

export const handler: Handler = async (event, context) => {
  try {
    const data = await (
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
        data.map(({ data: { first_name, last_name, message } }) => {
          return { first_name, last_name, message }
        })
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
