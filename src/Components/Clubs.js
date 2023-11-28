import React from "react";
import transition from "../transition";
import './Home.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Footer from "./Footer";

const Clubs = () =>{
    return(
        <div>
           <div className="homecontent">
            <img className="secondimage" alt="" src="/images/womancoffee.png" />
            <p>Note that the Font Awesome icons weren't designed like the Material Icons (compare the two previous demos). 
                The fa icons are cropped to use all the space available. You can adjust for this with a global override:</p>
        </div>
        <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Online Club
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Come and Join an online club of more than 200 book readers.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <button className="btn">Join Now</button>
      </CardActions>
    </Card>
    <Footer />
        </div>
       
    )
}

export default transition(Clubs);