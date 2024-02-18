import React, { ChangeEvent, useState } from 'react'
import { Book } from '../../types/Book';
import s from "./style.module.css";
type FormData = {
  id:string
  title:string,
  author:string,
  yearIssue:string,
  count:string,
};
type Props = {addBook: Function}

export default function AddBook({addBook}:Props) {
  const [book, setBook] = useState<FormData>({id:"", title: "", author: "", yearIssue:"", count:""});

  const changeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setBook({
        ...book,
        [name]: value
    });
  }
  
  const submitHandler = (event:React.FormEvent):void => {
    event.preventDefault();
    const newBook: Book = {...book,  marks:[]}
    addBook(newBook);
  }
  return (
    <div className={s.form_container}>
      <h2>Add book form</h2>
      <form className={s.form} onSubmit={submitHandler}>
        <input className={s.input_num} value={book.id} type="text" name='id' placeholder="id>=5" onChange={changeHandler}/>
        <input value={book.title} type="text" name='title' placeholder='title' onChange={changeHandler}/>
        <input value={book.author} type="text" name='author' placeholder='author' onChange={changeHandler}/>
        <input className={s.input_num} value={book.yearIssue} type="text" name='yearIssue' placeholder='yearIssue' onChange={changeHandler}/>
        <input className={s.input_num} value={book.count} type="text" name='count' placeholder='count' onChange={changeHandler}/>
        <button className={s.button_form}>Add book</button>
      </form>
    </div>
  )
}
