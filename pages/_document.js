import React, { Component } from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Component {
  render() {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
                <div id='notifications' ></div>
            </body>
     </Html>
    )
  }
}


