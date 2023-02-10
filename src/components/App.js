import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import CustomProvider from "./CustomProvider";

const App = () => {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CustomProvider>
  )
}

export default App;
