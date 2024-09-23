import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://cdn.jsdelivr.net' />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css'
          />
        </Head>
        <body id='app'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
