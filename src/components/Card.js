import React from 'react';
import {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Orange from '../images/oranges.jpg'

const useStyles = makeStyles({
    root: {
      maxWidth:400
    },
    media: {
      height: 200,
      marginTop: '30'
    },
  });


const TestCard = ({content, deletebtn, authenticate}) => {
  const classes = useStyles();
  const [likes, setLikes] = useState(0);
  

  const LikeButton = () =>{
    setLikes(likes+1);
  }

  return (
    <div className="NewCard">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component='img'
            src={Orange}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Title of Work: {content.title}</Typography>
            <Typography gutterBottom variant="h5" component="h5">Creator Name: {content.creator}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Brief Description: {content.description}</Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary" onClick={LikeButton}>
            Likes: {likes}
          </Button>
          <Button size="small" color="primary" href="https://www.theotherartfair.com/toronto/" target="_blank">
            Learn More
          </Button>
          {
            authenticate ?
            <Button size="small" color="secondary" onClick={() => deletebtn(content.id)}> Delete </Button>
            : null
          }
          
        </CardActions>
      </Card>
    </div>
    )
}

export default TestCard
