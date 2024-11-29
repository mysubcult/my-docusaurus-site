import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'База знаний',
  tagline: 'Все инструкции, советы и рекомендации в одном месте',
  favicon: 'img/favicon.ico',
  url: 'https://docs.смартдиаг.рф', // Ваш новый домен
  baseUrl: '/', // Базовый URL для вашего проекта
  organizationName: 'mysubcult', // Ваше имя пользователя или организация на GitHub
  projectName: 'my-docusaurus-site', // Название вашего проекта
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SmartDiag',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
        href: 'https://смартдиаг.рф', // Ссылка на основной сайт при нажатии на логотип
      },
      items: [
        {
          href: 'https://смартдиаг.рф',
          label: 'Главная',
          position: 'left',
        },
        {
          href: 'https://смартдиаг.рф/soft',
          label: 'Программы',
          position: 'left',
        },
        {
          to: '/docs',
          label: 'Инструкции',
          position: 'left',
        },
        {
          href: 'https://смартдиаг.рф/about',
          label: 'О нас',
          position: 'left',
        },
        {
          href: 'https://смартдиаг.рф/contact',
          label: 'Обратная связь',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Инструкции',
          items: [
            {
              label: 'Главная',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Обратная связь',
          items: [
            {
              label: 'Telegram',
              href: 'https://смартдиаг-поддержка.рф/telegram',
            },
            {
              label: 'WhatsApp',
              href: 'https://смартдиаг-поддержка.рф/whatsapp',
            },
          ],
        },
        {
          title: 'Еще',
          items: [
            {
              label: 'Официальный сайт',
              href: 'https://смартдиаг.рф',
            },
            {
              label: 'Новости',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SmartDiag.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
