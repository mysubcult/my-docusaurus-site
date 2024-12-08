import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro', // Страница приветствия
    {
      type: 'category',
      label: 'Мультимарочные', // Заголовок раздела
      items: [
        'autocom/faq', // Примеры документов в этом разделе
        'autocom/faq',
        // Добавьте другие документы по мере необходимости
      ],
    },
    {
      type: 'category',
      label: 'Марочные', // Заголовок другого раздела
      items: [
        'autocom/faq', // Примеры документов в этом разделе
        'autocom/faq',
        // Добавьте другие документы по мере необходимости
      ],
    },
    {
      type: 'category',
      label: 'Адаптеры ELM', // Заголовок третьего раздела
      items: [
        'autocom/faq', // Примеры документов в этом разделе
        'autocom/faq',
        // Добавьте другие документы по мере необходимости
      ],
    },
  ],
};

export default sidebars;
