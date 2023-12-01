import React from "react";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import './Publish.css';

/*first image attr :<a href="https://storyset.com/work">Work illustrations by Storyset</a> */
/* secon image attr : <a href="https://storyset.com/online">Online illustrations by Storyset</a> */
/* third image <a href="https://storyset.com/work">Work illustrations by Storyset</a> */

const Publish = () =>{

    return(
        <div className="publish-class">
        <div className="publish-header">
            <h3>Easy to Publish.</h3>
        </div>
        <div className="card-div">
         <div className="card-2">
          <Card sx={{ maxWidth: 345 }} className="cards-cards">
          <CardActionArea>
           <img src="/images/writee.svg" className="cardsimg" />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <h3>Write</h3> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Come and Join an online club of more than 200 book readers.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <button className="btn1">Join Now</button>
      </CardActions>
    </Card>

  </div>

  <div className="card-3">
  <Card sx={{ maxWidth: 345 }}  className="cards-cards">
      <CardActionArea>
      <img src="/images/upload.svg" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>Upload</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Come and Join an online club of more than 200 book readers.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <button className="btn1">Join Now</button>
      </CardActions>
    </Card>

  </div>

  <div className="card-3">
  <Card sx={{ maxWidth: 345 }}  className="cards-cards">
      <CardActionArea>
      <img src="/images/publishh.svg" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>
              Publish
              </h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Come and Join an online club of more than 200 book readers.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <button className="btn1">Join Now</button>
      </CardActions>
    </Card>

  </div>
 </div>
        </div>
    )
}


export default Publish;