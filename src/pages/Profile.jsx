function Profile({cardEmoji,cardHeader,cardSubtitle,cardBlurb}) {
 
   return (
   <div className="m-6 border p-3">
   <span className="text-5xl"> {cardEmoji} </span>
    <div>
     <div className=" inline-block px-3 my-3 font-bold border rounded-3xl shadow-md">
       <h1 className="text-2xl" > {cardHeader}</h1>
       <h2 className="text-med" > {cardSubtitle}</h2>
     </div>
   </div>
   <div className="border round-3xl p-5">

        <p> {cardBlurb}</p>

  </div>
 </div>
)
};


export default Profile;