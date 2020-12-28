import React from 'react';
import '../style.css';

function Books(props) {
    const { image, title, author } = props.book
    return (
        <article className="book">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <h3>{author} </h3>

        </article>
    )
}
export default Books;