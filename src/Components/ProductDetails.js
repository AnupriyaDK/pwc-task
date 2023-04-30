import { Card, Typography } from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import React, {useState,useEffect} from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

import ButtonGroup from '@mui/material/ButtonGroup';

import "./ProductDetails.css";

function ProductDetails(){
    const[state,setState]=useState([]);
    let view = 'card';
    const buttonClickHAndler = function(selectedView) {
        view = selectedView;
        console.log(view);
    }  
    const buttons = [
        <Button key="one" onClick={buttonClickHAndler('card')}>
            {<GridViewOutlinedIcon />}
        </Button>,
        <Button key="two" onClick={buttonClickHAndler('list')}>
            {<ListOutlinedIcon />}          
        </Button>,
      ];

   
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(state=>setState(state))
    },[])
    return(
        <div>
            <div className="heading">
                <div> <span className="all-text">All products</span> | <span className="found-text">{state.length} items found</span> </div>
                <div>
                    <ButtonGroup size="small" aria-label="small button group">
                        {buttons}
                    </ButtonGroup>
                </div>
            </div>
            <div className="card-container">
                {
                state.map(item=> {
                    if(view === 'card') {
                        return (
                            <Card  className="card" key={item.id}>
                                <CardContent>
                                    <div className="fav">
                                        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                    </div>
                                    <div className="bookmark">
                                        <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>
                                    </div>
                                    <img className="card-img" src={item.image} alt="productimage"></img>
                                    <div className="non-img-content">
                                        <Typography className="item-text" gutterBottom>{item.title}</Typography>
                                        <Typography className="cat-text" gutterBottom>{item.category}</Typography>
                                        <div className="price">
                                            <div className="cat-price">$ {item.price}</div>
                                            <div className="cat-price-strike">$ {item.price}</div>
                                        </div>
                                        <Button className="btn" variant="contained">Add</Button>
                                    </div>    
                                </CardContent>
                            </Card>
                        )
                    }  else {
                    return (<div key={item.id}>
                        test
                    </div>)
                    }        
                    
                })}
                
            </div>
        </div>
    )
}
export default ProductDetails;