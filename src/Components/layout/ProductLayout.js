// import {  BottomNavigation } from '@material-ui/core';
import ProductHeader from '../header/ProductHeader'; 
import ProductFooter from '../footer/ProductFooter';
import ProductDetails from '../productlist/ProductDetails';
import Navigation from '../navigation/Navigation';
import Menu from '../menu/Menu';
import "./ProductLayout.css";

function ProductLayout() {
  return (
    <>
      {/* <AppBar position="static" color="inherit"> */}
       <ProductHeader/>
      {/* </AppBar> */}
      <Navigation/>
      <section className='main-container'>
        <div className='menu-nav'>
          <Menu/>
        </div>
        <div className='product-list'>
          <ProductDetails/>
        </div>
      </section>
      {/* <BottomNavigation> */}
        <ProductFooter/>
      {/* </BottomNavigation> */}
    </>
  );
}
export default ProductLayout;
