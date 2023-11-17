import Head from "next/head"
import "style/g.scss"

function MyApp({ Component, pageProps }) {
  //我们所有的组件都会被渲染在Component上

  return (
    <>
      <Head>
        {/* Head里面的标签会应用在所有的页面的head上 */}
        <title>nextJS</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"></meta>
      </Head>
      <Component {...pageProps} />
    </>  
  )
}

export default MyApp