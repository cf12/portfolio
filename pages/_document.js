import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize-css@2.3.1/normalize.min.css"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-156522564-1"
          />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-156522564-1');
            `
          }} />
        </>
      </Html>
    )
  }
}

export default MyDocument