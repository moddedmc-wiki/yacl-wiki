import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YACL Wiki",
  description: "A builder-based configuration library for Minecraft.",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#d8b14a' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'og:image', content: '/icon.png' }]
  ],

  transformPageData(pageData) {
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:title',
        content:
          pageData.frontmatter.layout === 'home'
            ? `YACL Wiki`
            : `${pageData.title} | YACL Wiki`
      }
    ])

    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:description',
        content: pageData.frontmatter.description || "A builder-based configuration library for Minecraft."
      }
    ])
  },

  markdown: {
    lineNumbers: true
  },
  sitemap: {
    hostname: 'https://yacl.moddedmc.wiki/'
  },

  cleanUrls: true,

  themeConfig: {
    search: {
      provider: 'local',
      // options: {
      //   appId: 'DHC900L06Z',
      //   apiKey: '31c0bbd55f94c659a48a53a671bb8971',
      //   indexName: 'fabric'
      // }
    },

    logo: "/icon.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Contribute', link: '/contributing' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          {
            text: 'Installing YACL',
            link: '/getting-started/installing'
          },
          {
            text: 'Creating a Configuration Class',
            link: '/getting-started/creating'
          },
          {
            text: 'Adding Fields',
            link: '/getting-started/adding-fields'
          }
        ]
      }
    ],

    footer: {
      message: 'Not affiliated with Mojang Studios or the Fabric Project.',
      copyright: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International 2023 © Calum H. (IMB11)'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/moddedmc-wiki/yacl-wiki' },
      { icon: 'discord', link: 'https://discord.gg/5tmestARuU' }
    ]
  }
})
