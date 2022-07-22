import  { useState } from 'react';
import { CartForm } from './components/cart-form/cart-form';
import {Cart} from './components/cart/Cart';

function App() {
  const [cartArr,setCarts]=useState([
    {
      ProductName:"Happiness",
      ProductImage:"https://i.pinimg.com/736x/61/96/12/6196129834dedd3ace510d49e6a8f0a8.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },

    {
      ProductName:"All Of Us Are Dead",
      ProductImage:"https://m.media-amazon.com/images/M/MV5BOTY1ZGM2YzQtMTBjZC00NjE2LWJlNzUtYjA0YjYxNzBjMmRjXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    {
      ProductName:"Dr. Strange 3",
      ProductImage:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_multiverseofmadness_050087507534.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    { 
      ProductName:"Breaking Bad",
      ProductImage:"https://assets.gadgets360cdn.com/pricee/assets/product/202203/BreakingBad-4_1647286045.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
      
    },
    {
      
      ProductName:"Hellbound",
      ProductImage:"https://www.heavenofhorror.com/wp-content/uploads/2021/11/hellbound-netlix-review.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    {
      ProductName:"Loki",
      ProductImage:"https://flxt.tmsimg.com/assets/p19575003_b_h9_aa.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    {
      ProductName:"RRR",
      ProductImage:"https://flxt.tmsimg.com/assets/p19575003_b_h9_aa.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    {
      ProductName:"Panchayat S1 & S2",
      ProductImage:"https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    }
  ]);
  const addnewItem=(item)=>{
    console.log(item);
    const cartObj = {
      ProductName: item.ProductName,
      ProductPrice: item.ProductPrice,
      ProductImage: item.ProductImage,
      ProductRating: item.ProductRating
    }
    setCarts([...cartArr,item]);
  }
  return (
    <div className="App">

      <h1 id='navbar'>List of movies</h1>
       <CartForm OnNewItem = {addnewItem}/>
      {cartArr.map((cart,index)=>
      <Cart key={index} ProductName={cart.ProductName}
       ProductImage={cart.ProductImage} 
       ProductPrice={cart.ProductPrice} 
       ProductRating={cart.ProductRating}/>)
      }
      
    </div>
  
  );
}

export default App;


/* <Cart ProductName={cartArr[0].ProductName} ProductImg={cartArr[0].ProductImg} ProductPrice={cartArr[0].ProductPrice} ProductRating={cartArr[0].ProductRating}/>
      <Cart ProductName={cartArr[1].ProductName} ProductImg={cartArr[1].ProductImg} ProductPrice={cartArr[1].ProductPrice} ProductRating={cartArr[1].ProductRating}/>
      <Cart ProductName={cartArr[2].ProductName} ProductImg={cartArr[2].ProductImg} ProductPrice={cartArr[2].ProductPrice} ProductRating={cartArr[2].ProductRating}/>
      <Cart ProductName={cartArr[3].ProductName} ProductImg={cartArr[3].ProductImg} ProductPrice={cartArr[3].ProductPrice} ProductRating={cartArr[3].ProductRating}/>
      <Cart ProductName={cartArr[4].ProductName} ProductImg={cartArr[4].ProductImg} ProductPrice={cartArr[4].ProductPrice} ProductRating={cartArr[4].ProductRating}/>
      <Cart ProductName={cartArr[5].ProductName} ProductImg={cartArr[5].ProductImg} ProductPrice={cartArr[5].ProductPrice} ProductRating={cartArr[5].ProductRating}/>
      <Cart ProductName={cartArr[6].ProductName} ProductImg={cartArr[6].ProductImg} ProductPrice={cartArr[6].ProductPrice} ProductRating={cartArr[6].ProductRating}/>
      <Cart ProductName={cartArr[7].ProductName} ProductImg={cartArr[7].ProductImg} ProductPrice={cartArr[7].ProductPrice} ProductRating={cartArr[7].ProductRating}/> */