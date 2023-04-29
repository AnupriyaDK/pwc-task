// import {  BottomNavigation } from '@material-ui/core';
import ProductHeader from './ProductHeader'; 
import ProductFooter from './ProductFooter';
import ProductDetails from './ProductDetails';
import Navigation from './Navigation';
import Menu from './Menu';
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
