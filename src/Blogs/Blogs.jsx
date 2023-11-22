import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
import Mark from '../Mark/Mark';
import { addToDb, getBlog} from '../../utilities/fakedb';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    const [mark, setMark] = useState([]);
    const [spentTime, setSpentTime] = useState(0);

    const handleButton = blog =>{
        const newMark = [...mark, blog];
        setMark(newMark);
    }

    const timeChange = blog =>{
        setSpentTime(prevSpentTime => prevSpentTime + blog.read_time);
    }

    return (
        <div className='blogs-container'>
            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleButton={handleButton} timeChange={timeChange}></Blog>)
                }
            </div>
            <div>
                <Mark mark={mark} spentTime={spentTime}></Mark>
            </div>
        </div>
    );
};

export default Blogs;