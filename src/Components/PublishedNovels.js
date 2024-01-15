import React from "react";
import CardWeb from "./CardWeb";

const PublishedNovel = () =>{

    return(
        <div className="published-css"> 
          
            <CardWeb id={1} imgsrc={"/images/comics/comics1.png"} genre={"Drama"} title={"Fgu"} rate={"5.5 M"}  pubdate={"9 SEP 2023"}
            authorn={"Noell Lit"}
            authimg={"/images/team3.jpg"}/>
            <CardWeb imgsrc={"/images/comics/comics2.png"} genre={"Romance"} title={"Olive"} rate={"1.8 M"}  pubdate={"22 OCT 2023"}
            authorn={"Clo Lop"}
            authimg={"/images/team1.jpg"}/>

            <CardWeb imgsrc={"/images/comics/comics3.png"} genre={"Horror"} title={"Demon"} rate={"2.2 M"} pubdate={"2 DEC 2023"}
            authorn={"Joe Noe"}
            authimg={"/images/team2.jpg"}/>


            <CardWeb imgsrc={"/images/comics/comics4.png"} genre={"Rom-com"} title={"Her"} rate={"2.0 M"}  pubdate={"10 NOV 2023"}
            authorn={"Prachi P"}
            authimg={"/images/team3.jpg"} />


            <CardWeb imgsrc={"/images/comics/comics3.png"} 
            genre={"Horror"} 
            title={"Demon"} 
            rate={"2.2 M"} 
            pubdate={"21 OCT 2023"}
            authorn={"Mils Kun"}
            authimg={"/images/team2.jpg"}/>


            <CardWeb 
            imgsrc={"/images/comics/comics2.png"} 
            genre={"Romance"} title={"Olive"} 
            rate={"1.8 M"}
            pubdate={"10 OCT 2023"}
            authorn={"Arc Jake"}
            authimg={"/images/team1.jpg"}/>
        </div>
    )
}

export default PublishedNovel;