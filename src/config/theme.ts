import {type Colors, extendTheme, type ThemeConfig} from "@chakra-ui/react";

const themeConfig: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const colors: Colors = {
    transparent: 'transparent',
    white: '#fff',
    black: '#000',
    primary: {
        900: '#1C3FAA',
        800: '#1a389fed',
        700: '#3151BC'
    },
}

const styles = {
    global: (props: any) => ({
        "html, body": {
            bg: "primary.900"
        },
        body: {
            padding: "0.75rem 2rem"
        }
    }),
}

const theme = extendTheme({themeConfig, colors, styles})
export default theme;