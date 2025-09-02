import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GoChapaa Documentation',
  tagline: 'The Future of Finance for Africa Powered by AI and Blockchain',
  favicon: 'img/gochapaaicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.gochapaa.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For subdomain deployment, use root path
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gochapaa', // Usually your GitHub org/user name.
  projectName: 'gochapaa-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gochapaa/gochapaa-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gochapaa/gochapaa-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/gochapaa-social-card.svg',
    metadata: [
      {name: 'keywords', content: 'GoChapaa, fintech, Africa, blockchain, AI, cryptocurrency, mobile money, financial inclusion'},
      {name: 'description', content: 'GoChapaa - The Future of Finance for Africa Powered by AI and Blockchain'},
      {name: 'author', content: 'GoChapaa Team'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'GoChapaa Documentation'},
      {property: 'og:description', content: 'The Future of Finance for Africa Powered by AI and Blockchain'},
      {property: 'og:image', content: 'img/gochapaa-social-card.svg'},
      {property: 'og:url', content: 'https://gochapaa.io/docs'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'GoChapaa Documentation'},
      {name: 'twitter:description', content: 'The Future of Finance for Africa Powered by AI and Blockchain'},
      {name: 'twitter:image', content: 'img/gochapaa-social-card.svg'},
    ],
    navbar: {
      title: 'GoChapaa',
      logo: {
        alt: 'GoChapaa Logo',
        src: 'img/gochapaalogo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/gochapaa/gochapaa-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/overview',
            },
            {
              label: 'White Paper',
              to: '/whitepaper/executive-summary',
            },
            {
              label: 'Pitch Deck',
              to: '/pitchdeck/investor-deck',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://x.com/gochapaa',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/gochapaa',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/gochapaa',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gochapaa/gochapaa-docs',
            },
            {
              label: 'Website',
              href: 'https://gochapaa.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GoChapaa. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
