/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />

        <Script id="kloe-chat" strategy="afterInteractive">
          {`
            window.kloeChatOptions = {
              host: "https://kloe-widget.proatecnologia.com.br",
              integrationID: "gGIvuVgYcA5OmYkJErllq8ZjeTzfmlHW9QdGOFui",
              onLoad: (instance) => {
                window.kloe = instance;

                 console.log("Contexto inicial:", window.kloeChatOptions.context);

                instance.hide();
              }
            };

            setTimeout(function () {
              const o = window.kloeChatOptions;
              const t = document.createElement("script");
              t.src = o.host + "/widget/" + o.integrationID + ".js";
              document.head.appendChild(t);
            });
          `}
        </Script>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T6M36VR');`,
          }}
        />
      </Head>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6M36VR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
