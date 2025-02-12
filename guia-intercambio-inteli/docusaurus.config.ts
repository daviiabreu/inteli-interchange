import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Guia de Intercâmbio Inteli',
  favicon: 'img/inteli-escuro.png',

  // Set the production url of your site here
  url: 'https://daviiabreu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'daviiabreu', //org/user name.
  projectName: 'guia-intercambio-inteli', //repo name.

  onBrokenLinks: 'throw',
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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
    image: 'img/inteli-claro.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Inteli Logo',
        src: 'img/inteli-claro.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: '/ALGUMA_COISA', 
          label: 'ALGUMA COISA', 
          position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Institucional',
          items: [
            {
              label: 'Site Inteli',
              to: 'https://www.inteli.edu.br',
            },
          ],
        },
        {
          title: 'Informações oficiais',
          items: [
            {
              label: 'Informações Gerais de Intercâmbio - Drive',
              href: 'https://drive.google.com/drive/folders/1sQK2e3oBzcddodbHD2f9BIJIgPlvc9qI',
            },
            {
              label: 'Universidades conveniadas - Sheets',
              href: 'https://docs.google.com/spreadsheets/d/1iTW7Yvp_GeHri5_HuHYqlrqQ4YI0TAeBJt5hQSV0QAk/edit?usp=sharing',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Guia de Intercâmbio Inteli.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;