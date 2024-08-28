import { arbitrumStylus } from '@/components/wallet/arbitrum-stylus'
import { createConfig, http, cookieStorage, createStorage } from 'wagmi'
import {
    arbitrumSepolia,
    gnosisChiado,
    mainnet,
    morphSepolia,
    sepolia,
} from 'wagmi/chains'

export const config = createConfig({
    chains: [gnosisChiado, morphSepolia, mainnet, arbitrumStylus],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [gnosisChiado.id]: http(),
        [mainnet.id]: http(),
        [morphSepolia.id]: http(),
        [arbitrumStylus.id]: http(),
        // [arbitrumSepolia.id]: http(),
    },
})
