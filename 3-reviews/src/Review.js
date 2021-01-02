import React, { useState } from 'react';
import people from './data';


const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text, id } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        } else if (number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    const randomPerson = () => {
        let randomIndex = Math.floor(Math.random() * people.length);
        if (randomIndex === index) {
            randomIndex = randomIndex + 1;
        }
        setIndex(checkNumber(randomIndex));
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
            </div>
            <h4 className='author'> {name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <h4> {'<'}</h4>
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <h4> {'>'} </h4>
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                suprise me
            </button>
        </article>
    )
};

export default Review;
