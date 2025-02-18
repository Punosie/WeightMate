import "@fontsource-variable/orbitron";
import "@fontsource-variable/dynapuff";
import { createSystem, defaultConfig } from "@chakra-ui/react"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Orbitron Variable, DynaPuff Variable, Comic Sans " },
        body: { value: "Orbitron Variable, DynaPuff Variable, Comic Sans " },
      },
    },
  },
})

export default system;