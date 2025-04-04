import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/globa";
import { Header } from "./components/Header";
import { Blog } from "./pages/Blog";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Blog />
      
      <GlobalStyle />      
    </ThemeProvider>
  )
}

