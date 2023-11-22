import React from 'react';
import './Blog.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {cover_image, author_image, author_name, publish_date, 
        blog_title, read_time} = props.blog;

    const handleButton = props.handleButton;
    const timeChange = props.timeChange;
   
    return (
        <div className='blog-container'>
            <img className='cover-img' src={cover_image} alt="" />
            <div className='author-time'>
                <div className='author-info'>
                    <img className='author-img' src={author_image} alt="" />
                    <div className='author-info-div'>
                        <h4>{author_name}</h4>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div className='bookmark-btn'>
                    <p>{read_time} min read</p>
                    <button className='mark-btn' onClick={()=>handleButton(props.blog)}><FontAwesomeIcon icon={faBookmark}/></button>
                </div>
            </div>
            <h2 style={{margin: '7px', padding:'0'}}>{blog_title}</h2>
            <p style={{margin: '7px', padding:'0'}}>#beginners   #programming</p>
            <button className='time-btn' onClick={()=>timeChange(props.blog)}>Mark as read</button>
        </div>
    );
};

export default Blog;