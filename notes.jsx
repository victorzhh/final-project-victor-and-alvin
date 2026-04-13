import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import AboutUs from "./components/AboutUs.jsx";
import homeless from "./assets/homeless.jpg";
import sigma from "./assets/sigma.jpg";
import beta from "./assets/beta.jpg";


function App() {
  return (
    <div>
    <Header />
    <div className="flex gap-4 justify-center flex-wrap w-64">
    <Card />
    <AboutUs
      myName="Victor"
      myTitle="Site Creator"
      mySubtitle="I do most of the work"
      myBlurb="My name is Victor! I am a senior at Oakland Tech! I enjoy sleeping and playing video games! I hope you enjoy our website!"/>
        <img src={sigma} className="block mx-auto"/>
      <br /> <br />
    <AboutUs
      myName = "Alvin"
      myTitle="Editor"
      mySubtitle="I am not as important as Victor"
      myBlurb="My name is Alvin. When I play Valorant, Victor always carries me. I always rage and leave the game. Enjoy the website!"/>
        <img src={beta} className="block mx-auto" />
      </div>
      <br />
        <img src={homeless} className="block mx-auto" />
      <Footer />
    </div>
  ) ;
}

export default App;
