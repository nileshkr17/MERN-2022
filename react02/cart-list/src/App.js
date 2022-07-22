import React from 'react';
import {Cart} from './components/Cart';

function App() {
  const cartArr=[
    {
      ProductName:"Happiness",
      ProductImg:"https://i.pinimg.com/736x/61/96/12/6196129834dedd3ace510d49e6a8f0a8.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },

    {
      ProductName:"All Of Us Are Dead",
      ProductImg:"https://m.media-amazon.com/images/M/MV5BOTY1ZGM2YzQtMTBjZC00NjE2LWJlNzUtYjA0YjYxNzBjMmRjXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    {
      ProductName:"AOT S1-S4",
      ProductImg:"https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    {
      ProductName:"Deathnote",
      ProductImg:"https://flxt.tmsimg.com/assets/p225665_b_v9_ab.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    {
      ProductName:"Happiness",
      ProductImg:"https://i.pinimg.com/736x/61/96/12/6196129834dedd3ace510d49e6a8f0a8.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    },
    {
      ProductName:"Happiness",
      ProductImg:"https://i.pinimg.com/736x/61/96/12/6196129834dedd3ace510d49e6a8f0a8.jpg",
      ProductPrice:'$10',
      ProductRating:'Must Watch!'
    }
  ]
  return (
    <div className="App">
      <h1 id='navbar'>List of movies</h1>
      <Cart ProductName={cartArr[0].ProductName} ProductImg={cartArr[0].ProductImg} ProductPrice={cartArr[0].ProductPrice} ProductRating={cartArr[0].ProductRating}/>
      <Cart ProductName={cartArr[1].ProductName} ProductImg={cartArr[1].ProductImg} ProductPrice={cartArr[1].ProductPrice} ProductRating={cartArr[1].ProductRating}/>
      <Cart ProductName={cartArr[2].ProductName} ProductImg={cartArr[2].ProductImg} ProductPrice={cartArr[2].ProductPrice} ProductRating={cartArr[2].ProductRating}/>
      <Cart ProductName={cartArr[3].ProductName} ProductImg={cartArr[3].ProductImg} ProductPrice={cartArr[3].ProductPrice} ProductRating={cartArr[3].ProductRating}/>
      <Cart ProductName={cartArr[4].ProductName} ProductImg={cartArr[4].ProductImg} ProductPrice={cartArr[4].ProductPrice} ProductRating={cartArr[4].ProductRating}/>
      <Cart ProductName={cartArr[5].ProductName} ProductImg={cartArr[5].ProductImg} ProductPrice={cartArr[5].ProductPrice} ProductRating={cartArr[5].ProductRating}/>
    </div>
  );
}

export default App;
