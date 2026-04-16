import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Homelessness is Bad</h1>
          <p className="text-xl mb-6">
            Join us in understanding and addressing the crisis of homelessness
          </p>
          <a href="https://en.wikipedia.org/wiki/Homelessness" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Learn More
            </button>
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">330 Million</h3>
              <p className="text-gray-600">People experiencing homelessness in 2025</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">18%</h3>
              <p className="text-gray-600">Increase in homelessness from 2023 to 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">42 to 52 Years</h3>
              <p className="text-gray-600">Average life expectancy of a homeless person</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are dedicated to raising awareness about homelessness by sharing the cold hard facts. Through education, we can propel community action and change lives forever.
          </p>
          <p className="text-lg text-gray-700">
            Take a look through the website to become enlightened. 
          </p>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Home;