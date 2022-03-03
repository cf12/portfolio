import { AppProps } from 'next/app'
import React from 'react'
import NextNprogress from 'nextjs-progressbar'

import colors from 'theme/_colors.module.scss'
import 'theme/global.scss'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color={colors.primary}
        startPosition={0}
        stopDelayMs={0}
        height={1}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp