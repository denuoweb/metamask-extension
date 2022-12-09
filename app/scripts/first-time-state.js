import {
  HTMLCOIN_SYMBOL,
  HTMLCOIN_MAINNET_CHAIN_ID,
  HTMLCOIN_MAINNET_DISPLAY_NAME,
  HTMLCOIN_MAINNET_RPC_URL,
  HTMLCOIN_TESTNET_CHAIN_ID,
  HTMLCOIN_TESTNET_DISPLAY_NAME,
  HTMLCOIN_TESTNET_RPC_URL,
  HTMLCOIN_REGTEST_CHAIN_ID,
  HTMLCOIN_REGTEST_DISPLAY_NAME,
  HTMLCOIN_REGTEST_RPC_URL,
} from '../../shared/constants/network';
/**
 * @typedef {object} FirstTimeState
 * @property {object} config Initial configuration parameters
 * @property {object} NetworkController Network controller state
 */

/**
 * @type {FirstTimeState}
 */
const initialState = {
  config: {},
  PreferencesController: {
    frequentRpcListDetail: [
      {
        rpcUrl: 'http://localhost:8545',
        chainId: '0x539',
        ticker: 'HTMLCOIN',
        nickname: 'Localhost 8545',
        rpcPrefs: {},
      },
      /*
      {
        rpcUrl: HTMLCOIN_MAINNET_RPC_URL,
        chainId: HTMLCOIN_MAINNET_CHAIN_ID,
        ticker: HTMLCOIN_SYMBOL,
        nickname: HTMLCOIN_MAINNET_DISPLAY_NAME,
        rpcPrefs: {
          blockExplorerUrl: 'https://htmlcoin.info/',
        },
      },
      {
        rpcUrl: HTMLCOIN_TESTNET_RPC_URL,
        chainId: HTMLCOIN_TESTNET_CHAIN_ID,
        ticker: HTMLCOIN_SYMBOL,
        nickname: HTMLCOIN_TESTNET_DISPLAY_NAME,
        rpcPrefs: {
          blockExplorerUrl: 'https://testnet.htmlcoin.info/',
        },
      },
      /*
      {
        rpcUrl: HTMLCOIN_REGTEST_RPC_URL,
        chainId: HTMLCOIN_REGTEST_CHAIN_ID,
        ticker: HTMLCOIN_SYMBOL,
        nickname: HTMLCOIN_REGTEST_DISPLAY_NAME,
        rpcPrefs: {
          blockExplorerUrl: 'http://localhost:8545',
        },
      },
      */
    ],
  },
};

export default initialState;
