import {Cart} from './components/Cart'
//import{head} from './components/head'
function App() {
  const cartArr=[
    {
      ProductName:"Laptop",
      ProductImg:"https://m.media-amazon.com/images/I/31YXOswlYxL.jpg",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    },

    {
      ProductName:"Laptop",
      ProductImg:"https://www.cnet.com/a/img/resize/4e82f3a17554a5aff8089194237de5a3acfce3b4/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=630&width=1200",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    },
    {
      ProductName:"Laptop",
      ProductImg:"https://imageio.forbes.com/specials-images/imageserve/6213c2a05ed1f7de596d35b4/Apple-Brand-M1-Model-Macbook-pro-with-colorful-light-background-/960x0.jpg?format=jpg&width=960",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    },
    {
      ProductName:"Laptop",
      ProductImg:"https://timesofindia.indiatimes.com/thumb/msid-92852100,imgsize-18392,width-400,resizemode-4/92852100.jpg",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    },
    {
      ProductName:"Laptop",
      ProductImg:"https://www.wepc.com/wp-content/uploads/2021/12/MSI-gaming-laptop-buyers-guide-1-1200x679.jpg",
      ProductPrice:'10',
      ItemCompany:'Mac Book Pro M1'
    }
  ]
  return (
    <div className="App">
      <head></head>
        <Cart  ProductName={cartArr[0].ProductName} ProductImg={cartArr[0].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
        <Cart  ProductName={cartArr[1].ProductName} ProductImg={cartArr[1].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
        <Cart  ProductName={cartArr[2].ProductName} ProductImg={cartArr[2].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
        <Cart  ProductName={cartArr[3].ProductName} ProductImg={cartArr[3].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
        <Cart  ProductName={cartArr[4].ProductName} ProductImg={cartArr[4].ProductImg} ProductPrice={cartArr[0].ProductPrice} ItemCompany={cartArr[0].ItemCompany}/>
    </div>
  );
}

export default App;
//functional component - a js function
//class component