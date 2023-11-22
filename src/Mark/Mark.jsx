import React, { useEffect, useState } from 'react';
import './Mark.css'

const Mark = (props) => {
    const {mark, spentTime} = props;
    return (
        <div className='mark-container'>
            <p className='spent-time'>Spent Time On Read: {spentTime}</p>
            <div className='bookmark-container'>
                <h4>Bookmarks Blogs: </h4>
                <div className='added-blogs'>
                    <ul>
                        {mark.map((blog, index) => (
                            <p className='blog-bookmark' key={index}>{blog.blog_title}</p>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Mark;