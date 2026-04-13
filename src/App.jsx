import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Card from "./components/Card";
import Header from "./components/Header";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <BrowserRouter>
      <Header />
    <div className="flex gap-6 justify-center flex-wrap p-6">
      <Card
    name="Victor"
    title="Main Developer"
    blurb="My name is Victor! I am a senior at Oakland Tech! I enjoy sleeping and playing video games! I hope you enjoy our website!"
    github="https://github.com/victorzhh"
    skills= "HTML, Bootstrap, Tailwind"
    quote= "Homelessness is not the result of not having a house, it’s a lack of a soul in a body.” – Goitsemang Mvula"
    >
      <LikeButton />
    </Card>
    

    <Card
    name="Alvin"
    title="Developer"
    blurb="My name is Alvin. When I play Valorant, Victor always carries me. I always rage and leave the game. Enjoy the website!"
    github="https://github.com/humanbeing8118"
    skills= "Java, Python, Goofing Around"
    quote= "Homeless exist because billionaires exist. Bridge the gap between the two and you will find balance.” – Deborah Bravandt"
    >
      <LikeButton />
    </Card>
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;