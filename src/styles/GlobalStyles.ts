import { createGlobalStyle } from 'styled-components';

interface Props {
  theme: string
}

const GlobalStyles = createGlobalStyle<Props>`
    body {
        background-image: url(${({theme}) => theme === 'light' ? 'wallpaper.jpg' : 'nightwallpaper.jpg' });
        background-size: 100% 100%;
        margin: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-color: black;
    }
`

export default GlobalStyles;