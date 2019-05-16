import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
          <script src="/__/firebase/6.0.2/firebase-app.js"></script>

          {/* <!-- TODO: Add SDKs for Firebase products that you want to use
              https://firebase.google.com/docs/web/setup#reserved-urls -->

          <!-- Initialize Firebase --> */}
            <script src="/__/firebase/init.js"></script>
        </body>
      </html>
    )
  }
}