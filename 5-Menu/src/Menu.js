import React from 'react';

const Menu = (props) => {
    return (
        <div className='section-center'>
            {props.items.map((menuItem) => {
                const { id, title, image, desc, price } = menuItem;
                return (
                    <article key={id} className='menu-item'>
                        <img src={image} alt={title} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
};

export default Menu;
