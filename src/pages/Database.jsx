import { useState } from "react";
import Footer from "../components/Footer";

function Database() {
  const [cells, setCells] = useState([
    "Poverty is the root cause of homelessness, about 40% of Californians live close to the poverty line",
    "There are 134,000 homeless people in California",
    "2/3 of California homeless people are unsheltered",
    "1/5 of California homeless people suffer from severe mental illness",
    "Each homeless person costs tax payers between $30,000 and $50,000 annually",
    "40% of homeless youth are LGBTQ",
    "California accounts for 28% of the US homeless population",
    "From 2022-2023, homelessness in California increased by 5.7%",
    "On a single night in the United States, 34,703 unaccompanied youth experience homelessness",
    "7,184 youth were experiencing homelessness as parents",
    "California has 10,173 unaccompanied youth, a third of the US total",
    "California has 6,934 unsheltered unaccompanied youth, half of the US total",
    "Older adults are the fastest growing age group experiencing homelessness",
    "Many older adults rely on subsidized housing but there is not enough supply",
    "About 1.35 million children will experience homelessness in the course of a year",
    "84% of homeless families are headed by single mothers",
    "While consituting onto 13% of the US population, black people make up 37% of the homeless population",
    "2/3 homeless people in California are unsheltered",
    "In 2024, there were 187,084 homeless people in California but only 75,938 shelter beds",
    "Being homeless negatively impacts physical and mental health",
    "Homeless people are at a higher risk for respiratory infections, mental illness, bloodborne pathogens, severe illness, and death",
    "In California, homelessness increased by over 17% from 2017 to 2019",
    "Males are 70% of the homeless population and females are 13%",
    "About 34 million people in the United States live in poverty",
    "Over one in ten Canadians(1,690,000 people) have experienced homelessness in their lifetime",
  ]);

  const urls = [
    "https://static1.squarespace.com/static/5b1065c375f9ee699734d898/t/5b91ae8a0ebbe8d049f5aac6/1536274061686/Homelessness.pdf",
    "https://static1.squarespace.com/static/5b1065c375f9ee699734d898/t/5b91ae8a0ebbe8d049f5aac6/1536274061686/Homelessness.pdf",
    "https://static1.squarespace.com/static/5b1065c375f9ee699734d898/t/5b91ae8a0ebbe8d049f5aac6/1536274061686/Homelessness.pdf",
    "https://static1.squarespace.com/static/5b1065c375f9ee699734d898/t/5b91ae8a0ebbe8d049f5aac6/1536274061686/Homelessness.pdf",
    "https://static1.squarespace.com/static/5b1065c375f9ee699734d898/t/5b91ae8a0ebbe8d049f5aac6/1536274061686/Homelessness.pdf",
    "https://static1.squarespace.com/static/5b1065c375f9ee699734d898/t/5b91ae8a0ebbe8d049f5aac6/1536274061686/Homelessness.pdf",
    "https://shou.senate.ca.gov/sites/shou.senate.ca.gov/files/Homelessness%20in%20CA%202023%20Numbers%20-%201.2024.pdf",
    "https://shou.senate.ca.gov/sites/shou.senate.ca.gov/files/Homelessness%20in%20CA%202023%20Numbers%20-%201.2024.pdf",
    "https://shou.senate.ca.gov/sites/shou.senate.ca.gov/files/Homelessness%20in%20CA%202023%20Numbers%20-%201.2024.pdf",
    "https://shou.senate.ca.gov/sites/shou.senate.ca.gov/files/Homelessness%20in%20CA%202023%20Numbers%20-%201.2024.pdf",
    "https://shou.senate.ca.gov/sites/shou.senate.ca.gov/files/Homelessness%20in%20CA%202023%20Numbers%20-%201.2024.pdf",
    "https://shou.senate.ca.gov/sites/shou.senate.ca.gov/files/Homelessness%20in%20CA%202023%20Numbers%20-%201.2024.pdf",
    "https://housingmatters.urban.org/articles/9-facts-about-impending-senior-homelessness-crisis-and-how-we-can-stop-it",
    "https://housingmatters.urban.org/articles/9-facts-about-impending-senior-homelessness-crisis-and-how-we-can-stop-it",
    "https://greendoors.org/homelessness-facts/family-homelessness-facts/",
    "https://greendoors.org/homelessness-facts/family-homelessness-facts/",
    "https://onlinesocialwork.vcu.edu/blog/facts-about-homelessness/",
    "https://siepr.stanford.edu/publications/policy-brief/homelessness-california-recent-challenges-and-new-horizons",
    "https://siepr.stanford.edu/publications/policy-brief/homelessness-california-recent-challenges-and-new-horizons",
    "https://www.cdc.gov/homelessness-and-health/about/index.html",
    "https://www.cdc.gov/homelessness-and-health/about/index.html",
    "https://housingca.org/policy/focus/homelessness/",
    "https://housingca.org/policy/focus/homelessness/",
    "https://housingca.org/policy/focus/homelessness/",
    "https://www.statcan.gc.ca/o1/en/plus/5170-homelessness-how-does-it-happen",
  ];

  const handleCellChange = (index, value) => {
    const newCells = [...cells];
    newCells[index] = value;
    setCells(newCells);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Database of Facts</h1>
        <div className="grid grid-cols-5 gap-4">
          {cells.map((cell, index) => (
            <div key={index} className="relative aspect-square">
              <textarea
                className="w-full h-full rounded-xl bg-white p-4 shadow-md text-xl font-semibold text-gray-800 resize-none border-none outline-none"
                value={cell}
                onChange={(e) => handleCellChange(index, e.target.value)}
              />
              <a
                href={urls[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600 inline-block"
              >
                View Source
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Database;