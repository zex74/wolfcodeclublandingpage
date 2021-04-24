export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  webfontloader: {
    custom: {
      families: [
        "Open Sans Condensed::ital,wght@0,300;0,700;1,300&display=swap",
        "Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      ],
      urls: [
        "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap",
        "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      ]
    }
  },
  head: {
    title: "WolfCodeClub | Software development club with private members",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "WolfCodeClub is a club which provides services of software development for web, mobile and desktop using the most modern tech stack."
      },
      {
        name: "keywords",
        content:
          "Kurs programiranja, It kursevi, online kursevi programiranja, HTML za pocetnike, CSS za pocetnike, javascript za pocetnike, html i css za pocetnike"
      },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" },
      {
        property: "og:title",
        content: "WolfCodeClub | Software development company"
      },
      {
        property: "og:description",
        content: "WolfCodeClub | Software development club with private members"
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "wolfcodeclub.netlify.app" }
      // { property: 'og:image', content: 'https://wiequee.com/og.png' },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        izes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        izes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        izes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        izes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/manifest.json" }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/f63809cafc.js",
        crossorigin: "anonymous"
      },
      {
        type: "text/javascript",
        src: "https://widget.clutch.co/static/js/widget.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/typeWritter" },
    { src: "~/plugins/particlesPlugin", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxt-webfontloader",
    // With options
    [
      "nuxt-facebook-pixel-module",
      {
        /* module options */
        track: "PageView",
        pixelId: "312140806930929",
        autoPageView: true,
        disabled: false
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
