import React from 'react';
import {useState} from 'react';
import Orange from '../../images/oranges.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';


const useStyles = makeStyles({
    root: {
      maxWidth :350,
      height: 400,
      margin: 0,
    },
    media: {
      height: 200,
      marginTop: '30'
    },
  });


const TestCard = ({content, deletebtn, togglebtn, likebtn, authenticate}) => {
  const classes = useStyles();
  const [likesHit, setLikesHit] = useState(0);

  const LikeButton = () =>{
    likebtn(content.id);
    setLikesHit(likesHit+1);
  }


  return (
    <div className="NewCard">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component='img'
            src={Orange}
            title="Two Orange Friends"
          />
          <CardContent>
            <Typography gutterBottom variant="h6">{content.title}</Typography>
            <Typography gutterBottom variant="h6">{content.creator}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{content.description}</Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary" onClick={LikeButton}>
            Likes: {content.likes}
          </Button>
          <Button size="small" color="primary" href="https://www.theotherartfair.com/toronto/" target="_blank">
            Learn More
          </Button>
          {
            authenticate ?
            <Button size="small" color="secondary" onClick={() => deletebtn(content.id)}> Delete </Button>
            : null
          }
          <Checkbox checked={content.starred} icon={<StarBorder/>} checkedIcon={<Star/>} onChange={()=>togglebtn(content.id)} />
        </CardActions>
      </Card>
      
    </div>
    )
}

export default TestCard
