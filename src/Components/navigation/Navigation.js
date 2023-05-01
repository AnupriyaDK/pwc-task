import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CircularDeterminate from '../progress/progress'
import "./Navigation.css";
function Navigation(){
    return(
    <div className="container">
        <div className="back">
            <span><ArrowBackIosNewOutlinedIcon fontSize="inherit" style={{ verticalAlign: 'middle' }}/></span>
            <span>Back</span>
        </div>
        <div className="nav">
            <div>Products</div>
            <div>Education</div>
            <div>Orders</div>
            <div>Zeldapro</div>
        </div>
        <div className='align'>
            Loyality Scale
            <CircularDeterminate />
        </div>
    </div>)
}
export default Navigation;