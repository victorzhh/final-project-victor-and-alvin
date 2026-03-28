function Card() {
    const title = "Homelessness";
    const description = "It is bad";
    const emoji = "😊"

    return (
        <div className="text-2xl text-center text-shadow-lg">
            <span className="bg-white hover bg-orange-200 shadow-med hover:shadow-xl transition-all duration-200">{emoji}</span>
            <h3 className="bg-white hover:bg-blue-500 shadow-med hover:shadow-xl transition-all duration-200 underline text-blue-500 decoration-red-300 border-orange-600">{title}</h3>
            <p className="bg-red-400 rounded-xl m-8 ">{description}</p>
        </div>
    ) ;
}

export default Card;