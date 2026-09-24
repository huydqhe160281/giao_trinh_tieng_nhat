import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');

const config: Config = {
  title: 'Giáo án Minna N5',
  tagline: 'Bảng chữ cái · Minna no Nihongo I · 25 bài',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl: '/',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;700&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    navbar: {
      title: 'Giáo án Minna N5',
      logo: {
        alt: 'Minna N5',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'lessonSidebar',
          position: 'left',
          label: 'Bài học',
        },
        {
          to: '/docs/kana',
          label: 'Chữ cái',
          position: 'left',
        },
        {
          href: 'https://www.youtube.com/watch?v=YBI4nM5HC4c&list=PLbBhikLbVlB0GaIO_rfgGtkTqSS70lS_k',
          label: 'Video Minato',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Khóa học',
          items: [
            {
              label: 'Giới thiệu',
              to: '/docs/intro',
            },
            {
              label: 'Bảng chữ cái',
              to: '/docs/kana',
            },
            {
              label: 'Bài 1 — Câu danh từ',
              to: '/docs/bai-01-cau-danh-tu',
            },
          ],
        },
        {
          title: 'Tài liệu',
          items: [
            {
              label: 'Minna no Nihongo I (playlist)',
              href: 'https://www.youtube.com/watch?v=YBI4nM5HC4c&list=PLbBhikLbVlB0GaIO_rfgGtkTqSS70lS_k',
            },
          ],
        },
      ],
      copyright: `Giáo án Minna N5 · Minna no Nihongo I · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
