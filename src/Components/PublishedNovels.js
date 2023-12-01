import React from "react";
import CardWeb from "./CardWeb";

const PublishedNovel = () =>{

    return(
        <div className="published-css"> 
          
            <CardWeb imgsrc={"/images/comics/comics1.png"} genre={"Drama"} title={"Fgu"} rate={"5.5 M"}/>
            <CardWeb imgsrc={"/images/comics/comics2.png"} genre={"Romance"} title={"Olive"} rate={"1.8 M"}/>
            <CardWeb imgsrc={"/images/comics/comics3.png"} genre={"Horror"} title={"Demon"} rate={"2.2 M"} />
            <CardWeb imgsrc={"/images/comics/comics4.png"} genre={"Horror"} title={"Demon"} rate={"2.2 M"} />
        </div>
    )
}

export default PublishedNovel;