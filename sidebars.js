// // @ts-check

// /**
//  * Zoqq Sidebar Configuration
//  * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
//  */
// const sidebars = {
//   docs: [
//     {
//       type: 'category',
//       label: 'Getting Started',
//       collapsed: false,
//       items: ['getting-started'],
//     },
//     {
//       type: 'category',
//       label: 'API Reference',
//       collapsed: false,
//       items: [
//         'api-reference/authentication',
//         'api-reference/accounts',
//         'api-reference/transactions',
//       ],
//     },
//     {
//       type: 'category',
//       label: 'Changelog',
//       collapsed: false,
//       items: ['changelog'],
//     },
//   ],
// };

// export default sidebars;


// @ts-check

/**
 * Zoqq Sidebar Configuration
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started'],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        
        'api-reference/authentication',
        'api-reference/onboarding',
        'api-reference/accounts',
        'api-reference/wallets',
        'api-reference/payin',
        'api-reference/payout',
        'api-reference/cards',
        'api-reference/transactions',
      ],
    },
    {
      type: 'category',
      label: 'Changelog',
      collapsed: false,
      items: ['changelog'],
    },
  ],
};

export default sidebars;
