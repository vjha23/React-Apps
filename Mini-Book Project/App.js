import React from 'react';
import Books from './components/book';
import './style.css'
function App() {
  const booklist = [
    {
      id: 1,
      image: "https://images-na.ssl-images-amazon.com/images/I/51P1DyItvBL._SX325_BO1,204,203,200_.jpg",
      author: "Pravin Agarwal",
      title: "The Girl in the Dream",
    },
    {
      id: 2,
      image: "https://images-na.ssl-images-amazon.com/images/I/51GwJkB4eqL._SX326_BO1,204,203,200_.jpg",
      author: "Chetan Bhagat",
      title: "Half Girlfriend",
    },
    {
      id: 3,
      image: "https://images-na.ssl-images-amazon.com/images/I/51nziLHeduL._SX328_BO1,204,203,200_.jpg",
      author: "Chetan Bhagat",
      title: "The 3 Mistakes of My Life",
    }
  ]

  return (
    <section className="booklist">
      {booklist.map((book) => {
        return <Books key={book.id} book={book} />
      })}
    </section>
  );
}

export default App;
