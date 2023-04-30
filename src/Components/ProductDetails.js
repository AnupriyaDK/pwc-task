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
import CloseIcon from '@mui/icons-material/Close';

import BasicSelect from './select/select';
import ToggleButtons from './toggle/toggle';

import IncrementDecrementInput from './count-box/countBox';

import ButtonGroup from '@mui/material/ButtonGroup';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./ProductDetails.css";

function ProductDetails(){
    const [state,setState]=useState([]);
    const [viewState,setViewState]=useState('card');
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleRenderClick = (selectedItem) => setViewState(selectedItem);
    const handleOpenModal = (id) => {
        setSelectedItemId(id);
    };
    const handleCloseModal = () => {
        setSelectedItemId(null);
    };

    const buttons = [
        <Button key="one" onClick={() => handleRenderClick('card')}>
            {<GridViewOutlinedIcon />}
        </Button>,
        <Button key="two" onClick={() => handleRenderClick('list')}>
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
                    
            
            <div className={viewState === 'card' ? 'card-container' : 'list-container'}>
                {
                state.map(item=> {
                    if(viewState === 'card') {
                        <div>
                        
                    </div>  
                        return (
                            <Card  className="card" key={item.id}>
                                <CardContent>
                                    <div className="bookmark">
                                        <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>
                                    </div>
                                    <div className="fav">
                                        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                    </div>
                                    <img className="card-img" src={item.image} alt="productimage"></img>
                                    <div className="non-img-content">
                                        <Typography className="item-text" gutterBottom>{item.title}</Typography>
                                        <Typography className="cat-text" gutterBottom>{item.category}</Typography>
                                        <div className="price">
                                            <div className="cat-price">$ {item.price}</div>
                                            <div className="cat-price-strike">$ {item.price}</div>
                                        </div>
                                        <Button  onClick={() => handleOpenModal(item.id)} className="btn" variant="contained">Add</Button>
                                    </div>   
                                    <Modal
                                        keepMounted
                                        open={selectedItemId === item.id} onClose={handleCloseModal}
                                    >
                                        <Box className="modal">
                                            <div className="modal-header">
                                                <div className="modal-heading">
                                                    Customise your order
                                                </div>
                                                <div>
                                                    <CloseIcon onClick={handleCloseModal}/>
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <div className="modal-img">
                                                    <img  src={item.image} alt="productimage"></img>
                                                    <div>
                                                        <Typography className="modal-item-text" gutterBottom>{item.title}</Typography>
                                                    </div>
                                                    <div>
                                                        Product price: <span className="cat-price">$ {item.price}</span>
                                                    </div> 
                                                </div>
                                                <div className="option-selection">
                                                    <BasicSelect />
                                                    <ToggleButtons />
                                                    <ToggleButtons />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <div></div>
                                                <div>
                                                    <IncrementDecrementInput />
                                                    <Button  className="btn-modal" variant="contained">Add</Button>
                                                </div>
                                            </div>
                                        </Box>
                                    </Modal> 
                                </CardContent>
                            </Card>
                        )
                    }  else {
                        return (
                            <div className="list" key={item.id}>
                                 <div className="bookmark">
                                    <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/>
                                </div>
                                 <div className="fav">
                                        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                </div>
                                <div className="list-img">
                                    <img  src={item.image} alt="productimage"></img>
                                </div>
                                <div className="list-content">
                                    <Typography className="item-text" gutterBottom>{item.title}</Typography>
                                    <Typography className="sec-text" gutterBottom>{item.category}</Typography>
                                    <Typography className="ter-text" gutterBottom>{item.category}</Typography>
                                </div>
                                <div className="list-price">
                                    <div className="price">
                                            <div className="cat-price">$ {item.price}</div>
                                            <div className="cat-price-strike">$ {item.price}</div>
                                        </div>
                                         <Button  onClick={() => handleOpenModal(item.id)} className="list-btn" variant="contained">Add</Button>
                                </div>
                                <Modal
                                    keepMounted
                                    open={selectedItemId === item.id} onClose={handleCloseModal}
                                >
                                    <Box className="modal">
                                        {item.title}
                                    </Box>
                                </Modal> 
                            </div>
                        )
                    } 
                      
                })}
                
            </div>
        </div>
    )
}
export default ProductDetails;