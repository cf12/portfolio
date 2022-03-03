import React, { useMemo } from "react"
import { NextSeo } from "next-seo"
import { List } from "react-content-loader"
import useSWR from "swr"

import Layout from "components/Layout"
import Button from "components/Button"

import styles from "./guestbook.module.scss"
import { FaArrowRight } from "react-icons/fa"
import { IoAlertCircle } from "react-icons/io5"
import { GuestbookData } from "./api/guestbook"

const names = [
  ["Mai", "Sakurajima"],
  ["Kurisu", "Makise"],
  ["Hitagi", "Senjougahara"],
  ["Kaguya", "Shinomiya"],
  ["Rintarou", "Okabe"],
  ["Edward", "Elric"],
  ["Miyuki", "Shirogane"],
  ["Ai", "Hayasaka"],
  ["Reigen", "Arataka"],
  ["Shinobu", "Oshino"],
  ["Ryuuko", "Matoi"],
  ["Roy", "Mustang"],
  ["Kazuma", "Satou"],
  ["Rin", "Tohsaka"],
  ["Spike", "Spiegel"],
  ["Yoko", "Littner"],
  ["Yui", "Yuigahama"],
  ["Lelouch", "Lamperouge"],
  ["Mayuri", "Shiina"],
  ["Chika", "Fujiwara"],
  ["Homura", "Akemi"],
  ["Taiga", "Aisaka"],
  ["Kiritsugu", "Emiya"],
  ["Yukino", "Yukinoshita"],
  ["Shouko", "Nishimiya"],
  ["Suruga", "Kanbaru"],
  ["Mikoto", "Misaka"],
  ["Alphonse", "Elric"],
  ["Eru", "Chitanda"],
  ["Haruhi", "Suzumiya"],
  ["Shigeo", "Kageyama"],
  ["Shouto", "Todoroki"],
  ["Winry", "Rockbell"],
  ["Koyomi", "Araragi"],
  ["Mikasa", "Ackerman"],
  ["L", "Lawliet"],
  ["Tsubasa", "Hanekawa"],
  ["Maes", "Hughes"],
  ["Ochako", "Uraraka"],
]

const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) throw new Error()

  return res.json()
}

const Fun = () => {
  const { data, error } = useSWR("/api/guestbook", fetcher)

  const name = useMemo(
    () => names[Math.floor(Math.random() * names.length)],
    []
  )

  return (
    <Layout>
      <NextSeo title="TODO" description="TODO" />

      <div className={styles.container}>
        <h4 className={styles.subtitle}>{"// GUESTBOOK"}</h4>

        <p>
          Got something to share? Feel free to drop your words of wisdom down
          below! Or just say hi — whatever floats your boat.
        </p>

        <form
          name="guestbook"
          className={styles.form}
          method="POST"
          action="/api/guestbook"
        >
          <label style={{ display: "none" }}>
            Don&apos;t fill this out if you&apos;re human:{" "}
            <input name="sheesh" />
          </label>

          <div className={styles.fields}>
            <span>
              <label>
                First Name:{" "}
                <input
                  type="text"
                  name="first_name"
                  placeholder={name[0]}
                  required
                />
              </label>

              <label>
                Last Name:{" "}
                <input
                  type="text"
                  name="last_name"
                  placeholder={name[1]}
                  required
                />
              </label>
            </span>
            <label>
              Message:{" "}
              <textarea
                name="message"
                minLength={25}
                rows={6}
                maxLength={280}
                placeholder="¯\_(ツ)_/¯"
                required
              />
            </label>
          </div>

          <button type="submit">
            POST MESSAGE
            <FaArrowRight />
          </button>
        </form>

        <div className={styles.divider} />
        {data ? (
          <div className={styles.entries}>
            {data.map(
              ({ created_at, name, message }: GuestbookData, i: number) => {
                return (
                  <div className={styles.entry} key={i}>
                    <span>
                      <p>{name}</p>
                      <p>{new Date(created_at).toLocaleString()}</p>
                    </span>

                    <p>{message}</p>
                  </div>
                )
              }
            )}
          </div>
        ) : (
          <div className={styles.entriesEmpty}>
            {error ? (
              <>
                <IoAlertCircle className={styles.icon} />
                <p>An error occurred while loading the guestbook!</p>
              </>
            ) : (
              <List backgroundColor="#FFFFFF11" foregroundColor="#FFFFFF22" />
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Fun
