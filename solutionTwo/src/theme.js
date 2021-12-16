import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
const breakpoints = createBreakpoints({
  sm: "375px",
  md: "512px",
  lg: "1440px",
});
const components = {
  Checkbox: {
    baseStyle: {
      control: {
        bg: "#F1A801",
        _checked: {
          bg: "#F1A801",
        },
      },
    },
  },
};
const colors = {
  brand: {
    yellow: "#F1A801",
    white: "#FCFCFD",
    black: "#23262F",
    texts: "#777E90",
    ash: "#F4F5F6",
    border: "#E6E8EC",
    darkash: "#D8DDE0",
  },
};

const fonts = {
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  components,
  config,
});

export default theme;
