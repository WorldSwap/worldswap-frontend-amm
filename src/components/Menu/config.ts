import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dublin.worldswap.finance'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.worldswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.worldswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://dublin.worldswap.finance/#/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://dublin.worldswap.finance/#/pools'
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/WorldSwap',
      },
      {
        label: 'Docs',
        href: 'https://docs.worldswap.finance',
      },
    ],
  },
]

export default config
