/* eslint-disable react/no-danger */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.interdeal = {
                "sitekey": "833e897e19ff8d23d0d9dcbe30b6ad86",
                "Position": "left",
                "domains": {
                    "js": "https://cdn.equalweb.com/",
                    "acc": "https://access.equalweb.com/"
                },
                "Menulang": "PT",
                "btnStyle": {
                    "vPosition": [
                        "20%",
                        "20%"
                    ],
                    "scale": [
                        "0.6",
                        "0.6"
                    ],
                    "color": {
                        "main": "#008580",
                        "second": "#ffffff"
                    },
                    "icon": {
                        "type": 1,
                        "shape": "circle"
                    }
                }
              };
              (function(doc, head, body){
                  var coreCall = doc.createElement('script');
                  coreCall.src = interdeal.domains.js + 'core/4.6.11/accessibility.js';
                  coreCall.defer = true;
                  coreCall.integrity = 'sha512-SVffVpbO/SKg8zoE3NWu0Ct32mTRDO5b27N4qA5C+e6ctRHVwAk158RdBWMlaD2UuAtQUxeRwY71joiCkwsFVA==';
                  coreCall.crossOrigin = 'anonymous';
                  coreCall.setAttribute('data-cfasync', true );
                  body ? body.appendChild(coreCall) : head.appendChild(coreCall);
              })(document, document.head, document.body);
            `,
          }}
        />
      </body>
    </Html>
  );
}
