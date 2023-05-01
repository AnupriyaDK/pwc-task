import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './ProductHeader.css';
import { Badge } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductHeader(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [userEl, setUSerEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const useropen = Boolean(userEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleUserClick = (event) => {
        setUSerEl(event.currentTarget);
      };
      const handleUserClose = () => {
        setUSerEl(null);
      };
      const handleLogout = () => {
        navigate('/');
      }
    return(
        <div className="header-container">
            <div>
                <div className='order'>Ordering for</div>
                <div className='detailsContainer'>
                    <div className='location'>
                        <LocationOnOutlinedIcon fontSize="inherit" style={{ verticalAlign: 'middle' }}/>
                    </div>
                    <div className='organizationName'
                     aria-controls={open ? 'basic-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}>Eagle Pharmacy - Dallas, TX</div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        style={{width: 260}}
                    >
                        <MenuItem style={{width: 300}} onClick={handleClose}>Pharmacy</MenuItem>
                        <MenuItem onClick={handleClose}>Pharmacy</MenuItem>
                        <MenuItem onClick={handleClose}>Pharmacy</MenuItem>
                    </Menu>
                </div>  
            </div>
            <div className='zelda'>
                Zelda
            </div>
            <div className='iconContainer'> 
               
                    <div>
                        <SearchIcon/>
                    </div>
                    <div>
                        <Badge badgeContent={10} color="primary">
                            <NotificationsNoneOutlinedIcon/>
                        </Badge>
                        
                    </div>
                    <div>
                    <Badge badgeContent={10} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                    </div>
                    <div>
                        <FavoriteBorderOutlinedIcon/>
                    </div>
               
                    <div>
                        <AccountCircleOutlinedIcon onClick={handleUserClick}/>
                        <Menu
                        id="user-menu"
                        anchorEl={userEl}
                        open={useropen}
                        onClose={handleUserClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleUserClose}>Profile</MenuItem>
                        <MenuItem onClick={handleUserClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                    </div>
               
            </div>
        </div>
    )
}
export default ProductHeader;