
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
		  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Lato&family=Oswald&family=Poppins:ital@1&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument