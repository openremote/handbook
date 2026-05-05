import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'introduction',
    'organisational-context-governance',
    'information-security-management-system',
    'risk-management-framework',
    'secure-product-development-lifecycle',
    'vulnerability-management-and-coordinated-disclosure',
    'operational-security-and-infrastructure-protection',
    'incident-management-and-nis2-compliance',
    'business-continuity-and-operational-resilience',
    'supply-chain-and-third-party-risk-management',
    'data-protection-and-privacy-management',
    'people-resource-management',
    'core-operational-processes',
    'performance-evaluation-and-retrospective',
    'continuous-improvement',
    'evidence-register-tools-and-systems',
    {
      type: 'category',
      label: 'Annexes',
      link: {
        type: 'doc',
        id: 'annexes/index',
      },
      items: [
        'annexes/annex-a-statement-of-applicability',
        'annexes/annex-b-incident-response-templates',
      ],
    },
  ],
};

export default sidebars;
