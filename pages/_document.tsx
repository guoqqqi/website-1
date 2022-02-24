import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { lngFromReq } from "next-i18next/dist/commonjs/utils";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      const lng = lngFromReq(ctx.req);
      return {
        ...initialProps,
        lng,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { lng = "zh-CN" } = this.props as any;
    return (
      <Html lang={lng}>
        <Head>
          <meta
            name="google-site-verification"
            content="SqHhSbUKs7rXIolQCAgDgo9TGPBk5JOHC48_NkgYcGM"
          />
        </Head>
        <body>
          <Main />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-176821176-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-176821176-1');
gtag('config', 'G-67W6P10FPY');
gtag('config', 'UA-176821176-3');
`,
            }}
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}
