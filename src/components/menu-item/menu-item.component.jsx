import React from 'react';
import { Link } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, id, imageUrl, size, linkUrl}) => (
    <div className={`${size} menu-item`} key={id}>
        <div 
        className='background-image' 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>

        <Link to={linkUrl} className="content" style={{ textDecoration: 'none' }}>
            <div>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
            </div>
        </Link>
    </div>
);

export default MenuItem;

