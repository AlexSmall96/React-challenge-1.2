import React from 'react'
import Book from './Book'

export default function RenderingLists() {

    const books = [
        {
            title: 'tkmb',
            author: 'harper lee',
            pages:283
        },
        {
            title:'tgg',
            author:'f scott',
            pages:218
        },
        {
            title:'cr',
            author:'jd',
            pages:234
        }
    ]
  return (
        <Book
            book
        />
  )
}
