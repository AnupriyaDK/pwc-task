import { Card, Typography } from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import React, {useState,useEffect} from "react";
import Button from '@mui/material/Button';
import "./ProductDetails.css";

function ProductDetails(){
    const[state,setState]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(state=>setState(state))
    },[])
    return(
        <div>
            <div className="heading">
                <div> <span className="all-text">All products</span> | <span className="found-text">{state.length} items found</span> </div>
            </div>
            <div className="card-container">
                {
                state.map(item=>( 
                                    
                            <Card  className="card" key={item.id}>
                                <CardContent>
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
                ))}
                
            </div>
        </div>
       )
}
export default ProductDetails;