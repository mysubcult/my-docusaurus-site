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
  scripts: [
        {
            'src' : '/js/lhc.js',
            async: true
        }
    ],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Set this value to '/'.
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
      logo: {
        alt: 'SmartDiag',
        src: 'img/logo.png',
        href: 'https://смартдиаг.рф',
        target: '_self',
      },
      items: [
        {
          to: 'https://смартдиаг.рф',
          target: '_self',
          label: 'Главная',
          position: 'left',
        },
        {
          to: 'https://смартдиаг.рф/soft',
          target: '_self',
          label: 'Программы',
          position: 'left',
        },
        {
          to: '/',
          label: 'Инструкции',
          position: 'left',
        },        
        {
          to: 'https://смартдиаг.рф/about',
          target: '_self',
          label: 'О нас',
          position: 'left',
        },
        {
          to: 'https://смартдиаг.рф/contact',
          target: '_self',
          label: 'Обратная связь',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Навигация',
          items: [
{
          to: 'https://смартдиаг.рф',
          target: '_self',
          label: 'Главная',
        },
        {
          to: 'https://смартдиаг.рф/soft',
          target: '_self',
          label: 'Программы',
        },
        {
          to: '/',
          label: 'Инструкции',
        },        
        {
          to: 'https://смартдиаг.рф/contact',
          target: '_self',
          label: 'Обратная связь',
        },
          ],
        },
        {
          title: 'Обратная связь',
          items: [
            {
              label: 'Telegram',
              to: 'https://смартдиаг-поддержка.рф/telegram',
            },
            {
              label: 'WhatsApp',
              to: 'https://смартдиаг-поддержка.рф/whatsapp',
            },
          ],
        },
        {
          title: 'Еще',
          items: [
        {
          to: 'https://смартдиаг.рф/about',
          target: '_self',
          label: 'О нас',
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
