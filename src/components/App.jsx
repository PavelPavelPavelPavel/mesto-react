import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <>
      <div className="App">
        <body class="main">
          <div className="page">
            <Header />
            <Main />
            <Footer />
            <PopupWithForm />
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
