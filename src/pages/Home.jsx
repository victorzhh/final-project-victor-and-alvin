function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Homelessness is Bad</h1>
          <p className="text-xl mb-6">
            Join us in understanding and addressing the crisis of homelessness
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">1.6M+</h3>
              <p className="text-gray-600">People experiencing homelessness annually</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">40%</h3>
              <p className="text-gray-600">Homeless youth experience abuse</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">35 Days</h3>
              <p className="text-gray-600">Average life expectancy on the streets</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are dedicated to raising awareness about homelessness and providing resources 
            to help those in need. Through education and community action, we can make a difference.
          </p>
          <p className="text-lg text-gray-700">
            Visit the About Us page to meet our team and learn more about our vision.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;