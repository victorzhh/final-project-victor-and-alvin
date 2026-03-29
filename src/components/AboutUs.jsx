function AboutUs({myName,myTitle,mySubtitle, myBlurb}){
    return (
        <div className="border border-gray-800 p-3 rounded-lg">
            <h1 className="text-4xl text-blue-500 ">{myName}</h1>
            <h2 className="text2xl text-red-500 ">{myTitle}</h2>
            <h4 className="text-xl text-green-500 ">{mySubtitle}</h4>
            <p className="text-base text-yellow-500 ">{myBlurb}</p>
        </div>
    );
}

export default AboutUs;