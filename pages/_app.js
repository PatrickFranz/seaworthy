import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class BlogApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script src="https://cdn.firebase.com/libs/firebaseui/4.0.0/firebaseui.js"></script>
        <link 
          type="text/css" 
          rel="stylesheet" 
          href="https://cdn.firebase.com/libs/firebaseui/4.0.0/firebaseui.css" />
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {this.renderHead()}
        <CssBaseline />
        <Component {...pageProps} />
      </Container>
    );
  }
}