import React from 'react'
import { Book } from '../../types/Book'
import s from "./style.module.css";

type Props = Book & {removeBook: Function, addMark: Function, status: Function}

export default function ({id, title, author, yearIssue, count, marks, removeBook, addMark, status}: Props) {
    const rating:number = marks.reduce((acc, e)=> acc+e,0)/marks.length;
    
  return (
    <div className={s.item}>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>YearIssue: {yearIssue}</p>
        <p>Rating: {rating.toFixed(1)}</p>
        <p>Status: {status(id)}</p>
        <button className={s.button_del} onClick={()=> removeBook(id)}>Remove</button>
        <div>
          <p>Rate the book:</p>
          <button className={s.button_mark} onClick={()=> addMark(id, 1)}>1</button>
          <button className={s.button_mark} onClick={()=> addMark(id, 2)}>2</button>
          <button className={s.button_mark} onClick={()=> addMark(id, 3)}>3</button>
          <button className={s.button_mark} onClick={()=> addMark(id, 4)}>4</button>
          <button className={s.button_mark} onClick={()=> addMark(id, 5)}>5</button>
        </div>
    </div>
  )
}