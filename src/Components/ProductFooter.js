import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import "./ProductFooter.css";
function ProductFooter(){
    return(
        <div className='footerContainer'>
           <div className='footer'>
                    <div>
                        <div><ArticleOutlinedIcon /></div>
                        <div>Vaccine Storage</div>
                    </div>
                    <div>
                        <div>
                            <AutoGraphOutlinedIcon />
                        </div>
                        <div>Responsibility</div>
                    </div>
                    <div>
                        <div>
                            <CategoryOutlinedIcon />
                        </div>
                        <div>Resources</div>
                    </div>
                    <div>
                        <div><InfoOutlinedIcon/></div>
                        <div>About Us</div>
                    </div>
                    <div>
                        <div><PermPhoneMsgIcon/></div>
                        <div>Contact</div>
                    </div>
           </div>
        </div>
    )
}
export default ProductFooter;