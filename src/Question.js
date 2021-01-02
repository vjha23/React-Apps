import React, { useState } from 'react';

const Question = (props) => {

    const [showInfo, setShowInfo] = useState(false)
    return (
        <article className='question'>
            <header>
                <h4>{props.title}</h4>
                <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? '-' : '+'}
                </button>
            </header>
            {showInfo && <p>{props.info}</p>}

        </article>
    )
};

export default Question;
