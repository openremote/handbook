import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenRemote Handbook',
  tagline: 'The 100% Open Source IoT Platform for Manufacturers and Integrators',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://handbook.openremote.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openremote', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.

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
          editCurrentVersion: true,
          editUrl: 'https://github.com/openremote/handbook/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/openremote/handbook/edit/main/',
        },
        theme: {
          customCss: [
            './src/css/styles.css',
          ]
        },
        gtag: {
          trackingID: "GTM-MWP6C7F",
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/openremote-social-card.svg',
    navbar: {
      title: 'OpenRemote',
      logo: {
        alt: 'OpenRemote Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: false,
        },
        {
          href: 'https://forum.openremote.io/',
          label: 'Forum',
          position: 'right',
        },
        {
          href: 'https://github.com/openremote/openremote',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.openremote.io/',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.openremote.io/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/openremote',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/openremote/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/openremote/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/openremote/',
            },
            {
              label: 'X',
              href: 'https://x.com/OpenRemotePro/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/openremotepro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              to: 'https://www.openremote.io/',
            },
            {
              label: 'News',
              to: 'https://www.openremote.io/news/',
            },
            {
              label: 'Demo',
              href: 'https://www.openremote.io/demo/',
            },
            {
              label: 'Source Code',
              href: 'https://github.com/openremote/openremote/',
            },
            {
              label: 'OSS Licensing',
              href: 'https://openremote.io/open-source/',
            },
            {
              label: 'Contact',
              href: 'https://www.openremote.io/contact/',
            },
            {
              label: 'Privacy Policy',
              href: 'https://openremote.io/privacy-policy/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} OpenRemote, Inc. All Rights Reserved.`,
    },
    algolia: {
      apiKey: '18c8ff9992cf5a0b37acb9b008fa7cd9',
      appId: 'TVHZ0YEM1U',
      indexName: 'openremote',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
