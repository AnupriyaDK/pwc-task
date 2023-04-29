import { Card, Typography } from "@material-ui/core";
import CardContent from '@mui/material/CardContent';
import React, {useState,useEffect} from "react";
import "./ProductDetails.css";

function ProductDetails(){
    const[state,setState]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(state=>setState(state))
    },[])
    return(
        <div className="card-container">{
            state.map(item=>( 
                               
                        <Card  className="card" key={item.id}>
                            <CardContent>
                                <img className="card-img" src={item.image} alt="productimage"></img>
                                <Typography variant="h5" component="h2" gutterBottom>{item.title}</Typography>
                                <Typography gutterBottom>{item.rating.rate}</Typography>
                                <Typography gutterBottom>{item.price}</Typography>
                            </CardContent>
                        </Card>   
            ))}
           
        </div>)
}
export default ProductDetails;