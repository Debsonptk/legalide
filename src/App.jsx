import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/styles/global.css"
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";

const App = () =>
  <>
    <Header />
    <div className="container">
      <Main />
      <ContactUs />
    </div>;
    <Footer />
  </>



export default App;
