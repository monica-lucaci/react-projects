import Book from "./Book";
import { books } from "./books";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book,index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};

const App = () => {
  return (
    <>
    <h1 className="title-h1">Amazon best sellers</h1>
     <div>
      <BookList />
    </div>
    </>
   
  );
};

export default App;
