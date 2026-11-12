export const siteConfig = {
  siteName: 'Grand Theft Timeline Guide',
  domain: 'grandthefttimeline.wiki',
  url: 'https://grandthefttimeline.wiki',
  gameTitle: 'Grand Theft Timeline',
  steamAppId: 4928450,
  steamUrl: 'https://store.steampowered.com/app/4928450/Grand_Theft_Timeline/',
  supportEmail: 'grandemprise@gmail.com',
  social: [
    { href: 'https://www.tbjbu2.com/', label: 'Site printed on Steam' },
  ],
  developer: 'REAL PLAYERS',
  publisher: 'REAL PLAYERS',
  tagline: 'Unofficial English fan guide for the upcoming co-op time-travel heist.',
  locale: 'en',
  themeColor: '#10110e',
  contentRoot: 'grandthefttimeline',
  homeTitle: 'Grand Theft Timeline Guide — Release Date and the Time-Travel Heist',
  homeDescription:
    'Unofficial English guide to Grand Theft Timeline (Steam AppID 4928450) by REAL PLAYERS. The store date is 19 November 2026 and the game was still coming soon on 12 November 2026. Not affiliated with REAL PLAYERS, Rockstar Games, or Valve.',
  analytics: {
    gaId: 'G-RMLGP8DPXZ',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Grand Theft Timeline: a blocky figure in a beige cap and blue shirt looks across a rocky slope toward a stone castle, a bridge, and snowy mountains',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Grand Theft Timeline: the blue title beside two blocky figures in white hard hats, one yellow and one green, with red-coated figures along a stone wall',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'grandthefttimeline.wiki is an unofficial fan-made guide for Grand Theft Timeline. It is not affiliated with, endorsed by, or sponsored by REAL PLAYERS, Rockstar Games, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. The game was still marked coming soon on 12 November 2026. This site does not sell the game, recover accounts, or invent world lists, weapon tables, or progression trees. The site URL and the support email in the footer are the ones printed on the Steam store page. Mail sent to that address does not reach the people who edit this wiki, and this wiki does not read that mailbox.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/worlds', label: 'Worlds' },
    { href: '/progression', label: 'Progression' },
    { href: '/coop', label: 'Co-op' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  footerNav: [
    { href: '/guide', label: 'Guide' },
    { href: '/worlds', label: 'Worlds' },
    { href: '/progression', label: 'Progression' },
    { href: '/coop', label: 'Co-op' },
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
  version: {
    label: 'Checked 12 Nov 2026',
    detail:
      'Store text, platforms, languages, categories, genres, system requirements, screenshots, and the release date are from the Steam appdetails API (English) and the English store page on 12 Nov 2026. coming_soon was true. No launch client was played. package_groups was empty, so that payload had no public price. Counts such as 200+ worlds are the store’s own marketing claims.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/4928450/Grand_Theft_Timeline/',
      label: 'Steam store page',
    },
    {
      href: 'https://www.tbjbu2.com/',
      label: 'Site printed on the Steam page',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
