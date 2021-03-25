import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import DotIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 500,
    padding: 20,
},
  title: {
    fontSize: 26,
    fontWeight: 'bolder',
    backgroundColor: '#FFDC60',
    width: '100%'
  },
  category: {
      fontWeight: 'bolder'
  },
  dots: {
    display: 'flex',
    justifyContent:'space-between',
    fontSize: 10,
    marginTop: 20
  },
  dotIcon: {
      float:'left',
  },
  edit: {
      float: 'right',
      opacity: 0.5
  },
  item: {
        margin: 0,
        display: 'inline-block'
  },
  price: {
    margin: 0,
    display: 'inline-block',
    float: 'right'
}, 
menuContainer: {
    display: 'flex',
    width: '80%',
    height: 'auto',
    margin: '0 auto',
}
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className = {classes.menuContainer}>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} align="center" backgroundColor="#FFDC60">
          Lunch Menu
          <EditIcon className={classes.edit} color="gray"  label="Edit"/>
          </Typography>
        <br/>
        <div className={classes.dots}>
        <DotIcon fontSize="small"  style={{ fill: '#17974A' }} />
        Fast (10-15 miuntes)
        <DotIcon fontSize="small" style={{ fill: '#FFDC60' }} />
        Medium (20-30 minutes)
        <DotIcon fontSize="small" style={{ fill: '#971717' }} />
        Long (30+ minutes)
        </div>
        
        <br/>
        <br/>
        <Typography className={classes.category} variant="h5">
          Fresh Salads
        </Typography>
        <br/>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#17974A' }} />
            <span className={classes.item}>Chicken Caesar Salad</span>
            <span className={classes.price}>12.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
            romaine | croutons | parmesan crisps
        </Typography>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#17974A' }} />
            <span className={classes.item}>Greek Salad</span>
            <span className={classes.price}>10.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        spring mix | feta | olives | cucumbers
        </Typography>

        <br/>
        <Typography className={classes.category} variant="h5">
          Sandwiches and Burgers
        </Typography>
        <br/>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#FFDC60' }} />
            <span className={classes.item}>BBQ Sliders</span>
            <span className={classes.price}>10.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        house made pulled pork | spicy pickles | southern slaw
        </Typography>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#FFDC60' }} />
            <span className={classes.item}>Deluxe Burger</span>
            <span className={classes.price}>12.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        angus beef | cheddar | neuskes bacon
        </Typography>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#FFDC60' }} />
            <span className={classes.item}>Turkey Burger</span>
            <span className={classes.price}>14.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        springer farms turkey | cranberry aoili | heirloom tomatoes
        </Typography>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#FFDC60' }} />
            <span className={classes.item}>Fried Bologna Panini</span>
            <span className={classes.price}>122.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        oscar meyer farms | lays potato crisps | dukes aioli
        </Typography>

        <br/>
        <Typography className={classes.category} variant="h5">
          Drinks
        </Typography>
        <br/>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#17974A' }} />
            <span className={classes.item}>Horchata</span>
            <span className={classes.price}>5.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        refreshing Mexican beverage
        </Typography>
      </CardContent>
    </Card>
    <br/>

    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} variant="h5" component="h2" align="center">
          Dinner Menu
          <EditIcon className={classes.edit} label="Edit"/>
        </Typography>
        <br/>
        <br/>
        <br/>
        <Typography className={classes.category} variant="h5">
          Fresh Salads
        </Typography>
        <br/>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#17974A' }} />
            <span className={classes.item}>Chicken Caesar Salad</span>
            <span className={classes.price}>12.95</span>
        </Typography>
        <Typography component="p" color="textSecondary">
        romaine | croutons | parmesan crisps
        </Typography>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#17974A' }} />
            <span className={classes.item}>Greek Salad</span>
            <span className={classes.price}>10.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        spring mix | feta | olives | cucumbers
        </Typography>

        <br/>
        <Typography className={classes.category} variant="h5">
          Entrees
        </Typography>
        <br/>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#971717' }} />
            <span className={classes.item}>Pork Chops</span>
            <span className={classes.price}>19.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        hillshire farms | parmesan risotto | carmelized apples
        </Typography>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#FFDC60' }} />
            <span className={classes.item}>Deluxe Burger</span>
            <span className={classes.price}>14.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        angus beef | cheddar | neuskes bacon
        </Typography>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#FFDC60' }} />
            <span className={classes.item}>Grouper</span>
            <span className={classes.price}>24.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        panko crusted | cauliflower mash | heirloom tomatoes
        </Typography>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#971717' }} />
            <span className={classes.item}>Tomahawk Ribeye</span>
            <span className={classes.price}>3,422.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        64 oz | roasted fingerlings | sunburst squash
        </Typography>

        <br/>
        <Typography className={classes.category} variant="h5">
          Drinks
        </Typography>
        <br/>
        <Typography>
        <DotIcon fontSize="small" style={{ fill: '#17974A' }} />
            <span className={classes.item}>Horchata</span>
            <span className={classes.price}>5.95</span>
        </Typography>
        <Typography  component="p" color="textSecondary">
        refreshing Mexican beverage
        </Typography>
        

        
      </CardContent>
    </Card>

    
    </div>
  );
}