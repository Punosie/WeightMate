import { createSystem, defineConfig } from "@chakra-ui/react";
import "@fontsource-variable/orbitron";
import "@fontsource-variable/dynapuff";

const config = defineConfig({
  theme: {
    tokens: {
      fontFamilies: {
        heading: {value: "Orbitron Variable, sans-serif",},
        body: {value: "DynaPuff Variable, sans-serif",},
        test: {value: "Orbitron Variable, sans-serif",},
      },
    },
  },
});

const system = createSystem(config);

export default system;
