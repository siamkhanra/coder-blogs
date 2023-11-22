// use local storage to manage cart data
const addToDb = id => {
    let blog = getBlog();
    // add quantity
    const quantity = blog[id];
    if (!quantity) {
        blog[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        blog[id] = newQuantity;
    }
    localStorage.setItem('blog', JSON.stringify(blog));
}

const removeFromDb = id => {
    const blog = getBlog();
    if (id in blog) {
        delete blog[id];
        localStorage.setItem('blog', JSON.stringify(blog));
    }
}

const getBlog = () => {
    let blog = {};

    //get the shopping cart from local storage
    const storedBlog = localStorage.getItem('blog');
    if (storedBlog) {
        blog = JSON.parse(storedBlog);
    }
    return blog;
}

const deleteBlogCart = () => {
    localStorage.removeItem('blog');
}

export {
    addToDb,
    removeFromDb,
    getBlog,
    deleteBlogCart
}
