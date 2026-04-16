import Footer from "../components/Footer";
function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-15">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>
          <div className="space-y-4 rounded-2xl border border-gray-300 bg-gray-50 p-6 text-lg text-gray-900">
            <div>
              <span className="font-semibold">X:</span> @homelessnessisverybadverybad
            </div>
            <div>
              <span className="font-semibold">Facebook:</span> facebook.com/homelessnessisbad
            </div>
            <div>
              <span className="font-semibold">Instagram:</span> @homelessnessisbad
            </div>
            <div>
              <span className="font-semibold">Email:</span> homelessnessisbad@gmail.com
            </div>
            <div>
              <span className="font-semibold">Address:</span> 6767 Homeless Way, Oakland, CA
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
