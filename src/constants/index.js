export const FACTORY_ADDRESS = '0x7a2bbb0d1644ecd88de99e3fad82291199703ab9'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/bombmoney/bomb-assets/master/bomb-default.tokenlist.json',
  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0xca2de0ad1a82f78d42284774411f336f2550e7f5',
  '0x0889ce27ade6231a9820e34ba6e68fc0142b8d18',

  // rebass tokens
  '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x96b5cae9a24ddded494e40640b9639e9de73bd4b',
  '0xe3d0ccbbd5a3b9aa1232a627794cc170b4934ca4',
  '0x1ee0b388db6264380fe5f1dfbc13d92b0dcdcd85',
  '0x218ef54ba951deb693173841085c7595a146af6e',
  '0xa00a5fe3523984603c20c797cc8e1094aa28e1de',
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or BOMB pairings.'

// pairs that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES_PAIRS = [
  '0x43c4d5d8fd96558aa3e2134e93ed8b7035c4c552',
  '0x0c5ecd7b6d9bb4996f3ee98ae3cbe7ed06a66f0c',
  '0xfdb4c8454d2a2b41ed8e2e64ad2d4764f60518db',
]

// tokens that should be tracked but arent due to lag in subgraph
// all pairs that include token will be tracked
export const TRACKED_OVERRIDES_TOKENS = ['0xac029bf2871b3f810aabf836adc4f89369027971']
