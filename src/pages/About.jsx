import header from"../Header"
import ProfileCard from "../Profile"
import TextWithHeader from "../TextWithHeader"

function About() {
 return (
 <>
   <Header title="About us" subtitle="Meet The Team" />

      <div className="grid grid-cols-2 gap-4">  
        <ProfileCard 
          cardEmoji="💉"
          cardHeader="Alvin"
          cardSubtitle="Goat"
          cardBlurb="“Homelessness is not the result of not having a house, it’s a lack of a soul in a body.” – Goitsemang Mvula"
        />
        <div className="grid grid-cols-2 gap-4">  
        <ProfileCard 
          cardEmoji="💉"
          cardHeader="Victor"
          cardSubtitle="Not Goat"
          cardBlurb="“Homeless exist because billionaires exist. Bridge the gap between the two and you will find balance.” – Deborah Bravandt"
        />
        </div>
          <TextWithHeader
          mySubtitle="Our Mission"
          myText="Our mission is to spread awarness about how badly homelessness is and how fast it is spreading all around our community."
        />
      </div>
</>

)}

export default About;