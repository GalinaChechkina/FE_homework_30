import { useState } from "react";
import { Book } from "./types/Book";
import BookList from "./components/bookList/BookList";
import AddBook from "./components/addBook/AddBook";
import "./style.css";

function App() {

  const books: Book[] = [
    {id: "1", title: "T1", author: "A1", yearIssue: "2000", count: "0", marks: [5,5,4,5]},
    {id: "2", title: "T2", author: "A2", yearIssue: "2001", count: "10", marks: [3,1,4,3]},
    {id: "3", title: "T3", author: "A3", yearIssue: "2002", count: "200", marks: [4,4,4,5]},
    {id: "4", title: "T4", author: "A4", yearIssue: "2000", count: "0", marks: [3,2,2,1]},
  ];

  const [state, setState] = useState<Book[]>(books);

  const removeBook = (remove_id: string): void=> {
    const res:Book[] = state.filter(e=> e.id !== remove_id);
    setState(res);
  };

  const addMark = (victim_id: string, mark: number): void=> {
    const victimBook:Book | undefined = state.find(e=> e.id === victim_id);
    victimBook && victimBook.marks.push(mark);
    setState([...state]);
  };

  const status = (status_id: string): string | undefined=> {
    const victimBook:Book | undefined = state.find(e=> e.id === status_id);
    if (victimBook && +victimBook.count > 0){
      return "In stock";
    } else {
      return "Out of stock";
    };
  };

  const addBook = (book: Book): void=> {
    state.push(book);
    setState([...state]);
  };
  
  return (
    <div>
      <AddBook addBook = {addBook}/>
      {
        <BookList books = {state} removeBook={removeBook} addMark={addMark} status={status}/>
      }

    </div>
  );
};

export default App;
