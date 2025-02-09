import { createConfig, http, WagmiPlugin } from "@wagmi/vue"
import { mainnet, sepolia } from "@wagmi/vue/chains"

export default defineNuxtPlugin((nuxt) => {
  // Example config
  const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  })

  nuxt.vueApp.use(WagmiPlugin, { config })
})
