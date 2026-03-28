import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to our website!</h2>
        <Card />
      </main>
      <Footer />
    </div>
  ) ;
}

export default App;