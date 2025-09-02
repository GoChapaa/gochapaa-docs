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
  mainSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: '🚀 Overview',
    },
    {
      type: 'category',
      label: '📖 White Paper',
      items: [
        'whitepaper/executive-summary',
        'whitepaper/introduction',
        'whitepaper/market-context',
        'whitepaper/problem-statement',
        'whitepaper/solution',
        'whitepaper/wallet-features',
        'whitepaper/tokenomics',
        'whitepaper/roadmap',
      ],
    },
    {
      type: 'category',
      label: '📊 Pitch Deck',
      items: [
        'pitchdeck/investor-deck',
      ],
    },
  ],
};

export default sidebars;
