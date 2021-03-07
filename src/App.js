import logo from "./assets/img/logo.svg";
import { useEffect, useState } from "react";
import "./App.scss";
function App() {
  const [getfrase, setFrase] = useState({
    autor: "",
    quote: "",
  });
  const [loading, setloading] = useState(true);
  useEffect(() => {
    handleGetAPhrase();
  }, []);
  const handleGetAPhrase = async () => {
    const respuesta = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await respuesta.json();
    console.log(frase[0]);
    setFrase({
      autor: frase[0].author,
      quote: frase[0].quote,
    });
    setloading(false);
  };
  return (
    <main className="wrapperMain">
      <section className="wrapperImg">
        <img className="img" src={logo} alt="breaking Bad" />
      </section>
      <section className="wrapperFrase">
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {" "}
            <p className="frase">{getfrase.quote}</p>
            <p className="autor">-{getfrase.autor}</p>
          </>
        )}
      </section>
      <section className="wrapperButton">
        <button className="actionButton" onClick={handleGetAPhrase}>
          Obtener nueva Frase
        </button>
      </section>
    </main>
  );
}

export default App;
