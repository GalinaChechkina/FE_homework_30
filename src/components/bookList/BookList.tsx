import React from 'react'
import { Book } from '../../types/Book'
import BookItem from '../bookItem/BookItem'
import s from "./style.module.css";

type Props = {
    books: Book[],
    removeBook: Function, 
    addMark: Function,
    status: Function
}

export default function BookList({books, removeBook, addMark, status}: Props) {

  return (
    <div className={s.container}>
      <h2>Books list</h2>
        <div className={s.books_list}>
          {
            books.map(e => <BookItem key={e.id} {...e} removeBook={removeBook} addMark={addMark} status={status}/>)
          }
        </div>
    </div>
  )
}