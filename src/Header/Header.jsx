import React from 'react';
import './Header.css'

const Header = () => {
    const img = 'https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=-twL1NKKad6S_EPrGSniewjh6776A0Ju27ExMh7v_kI=';
    return (
        <div className='header-container'>
            <h1>Coder Blogs</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Header;