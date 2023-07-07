import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { chains, publicClient } = configureChains(
    [mainnet],
    [publicProvider()]
  );

  const config = createConfig({
    connectors: [
      new MetaMaskConnector({
        chains: [mainnet],
      }),
      new CoinbaseWalletConnector({
        options: {
          appName: 'wagmi.sh',
          jsonRpcUrl: 'https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId',
        },
      }),
    ],

    chains,
    publicClient,
  });

  return (
    mounted && (
      <WagmiConfig config={config}>
        <Component {...pageProps} />
      </WagmiConfig>
    )
  );
}
