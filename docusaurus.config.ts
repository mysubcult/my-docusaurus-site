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
          to: 'https://docs.смартдиаг.рф',
          target: '_self',
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
              label: 'Официальный сайт',
              to: 'https://смартдиаг.рф',
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
  scripts: [
    {
      src: '//xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js',
      async: true,
      crossorigin: 'anonymous',
      innerHTML: `
        var LHC_API = LHC_API||{};
        LHC_API.args = {mode:'widget',lhc_base_url:'//xn----7sbabnedajkp5ap8aokkew.xn--p1ai/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,domain:'docs.смартдиаг.рф',department:["1"],check_messages:false};
        (function() {
          var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
          var date = new Date();po.src = '//xn----7sbabnedajkp5ap8aokkew.xn--p1ai/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        })();
      `,
    },
  ],
};

export default config;
