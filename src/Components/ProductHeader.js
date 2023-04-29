import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './ProductHeader.css';
import { Badge } from '@mui/material';


function ProductHeader(){
    return(
        <div className="header-container">
            <div>
                <div className='order'>Ordering for</div>
                <div className='detailsContainer'>
                    <div className='location'>
                        <LocationOnOutlinedIcon fontSize="inherit" style={{ verticalAlign: 'middle' }}/>
                    </div>
                    <div className='organizationName'>Eagle Pharmacy - Dallas, TX</div>
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
                        <AccountCircleOutlinedIcon/>
                    </div>
               
            </div>
        </div>
    )
}
export default ProductHeader;