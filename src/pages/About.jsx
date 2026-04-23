import Card from "../components/Card";
import LikeButton from "../components/LikeButton";
import Footer from "../components/Footer";

function About() {
  return (
    <>
    <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <div className="flex gap-6 justify-center flex-wrap p-6">
        <Card
          name="Victor"
          title="Main Developer"
          blurb="My name is Victor! I am a senior at Oakland Tech! I enjoy sleeping and playing video games! I hope you enjoy our website!"
          github="https://github.com/victorzhh"
          skills="HTML, Bootstrap, Tailwind"
          quote="Homelessness is not the result of not having a house, it's a lack of a soul in a body. - Goitsemang Mvula"
        >
          <LikeButton />
        </Card>

        <Card
          name="Alvin"
          title="Developer"
          blurb="My name is Alvin. I am a senior at Oakland Tech and I enjoy playing a variety of sports. Enjoy the website!"
          github="https://github.com/humanbeing8118"
          skills="Java, Python, Goofing Around"
          quote="Homeless exist because billionaires exist. Bridge the gap between the two and you will find balance. - Deborah Bravandt"
        >
          <LikeButton />
        </Card>
      </div>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default About;