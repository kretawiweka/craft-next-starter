import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Meta from '#components/common/Meta'
import '../public/styles/application.scss'

const AnkaApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Meta />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default AnkaApp
