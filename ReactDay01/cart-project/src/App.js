import {Cart} from './components/Cart'
function App() {
  const cartArr=[
    {
      ProductName:"Laptop",
      ProductImg:"https://photos5.appleinsider.com/gallery/48932-95693-M2-MacBook-Air-display-xl.jpg",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    },

    {
      ProductName:"Bag",
      ProductImg:"https://photos5.appleinsider.com/gallery/48932-95693-M2-MacBook-Air-display-xl.jpg",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    },
    {
      ProductName:"Laptop",
      ProductImg:"https://photos5.appleinsider.com/gallery/48932-95693-M2-MacBook-Air-display-xl.jpg",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    },
    {
      ProductName:"Laptop",
      ProductImg:"https://photos5.appleinsider.com/gallery/48932-95693-M2-MacBook-Air-display-xl.jpg",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    },
    {
      ProductName:"Laptop",
      ProductImg:"https://photos5.appleinsider.com/gallery/48932-95693-M2-MacBook-Air-display-xl.jpg",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    }
  ]
  return (
    <div className="App">
        <h1>List Item</h1>
        <Cart  ProductName={cartArr[0].ProductName} ProductImg={cartArr[0].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
        <Cart  ProductName={cartArr[0].ProductName} ProductImg={cartArr[0].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
        <Cart  ProductName={cartArr[0].ProductName} ProductImg={cartArr[0].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
        <Cart  ProductName={cartArr[0].ProductName} ProductImg={cartArr[0].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
        <Cart  ProductName={cartArr[0].ProductName} ProductImg={cartArr[0].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
    </div>
  );
}

export default App;
//functional component - a js function
//class component