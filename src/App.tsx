import Header from "./Components/Header/header";
import Home from "./Pages/Home/home";
import GlobalFonts from "./Fonts/fonts";
import FooterHome from "Components/Footer/footer";

function App() {
  return <>
    <GlobalFonts />
    <Header />
    <Home />
    <FooterHome />
  </>
}

export default App;
