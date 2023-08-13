import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";

import {
  zoraTestnet,
  zora,
  mainnet,
  optimism,
  optimismGoerli,
  baseGoerli,
} from "wagmi/chains";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { publicClient } = configureChains(
    [mainnet, zora, zoraTestnet, optimism, optimismGoerli, baseGoerli],
    [publicProvider()]
  );

  const config = createConfig({
    connectors: [
      new MetaMaskConnector({
        chains: [
          mainnet,
          zora,
          zoraTestnet,
          optimism,
          optimismGoerli,
          baseGoerli,
        ],
      }),
      new CoinbaseWalletConnector({
        chains: [
          mainnet,
          zora,
          zoraTestnet,
          optimism,
          optimismGoerli,
          baseGoerli,
        ],
        options: {
          appName: "wagmi.sh",
          jsonRpcUrl: "https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId",
        },
      }),
    ],

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
