/* eslint-disable */
import Document, { Head, Html, Main, NextScript } from 'next/document'
/* eslint-enable */

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
