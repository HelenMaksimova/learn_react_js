import React from 'react';
import PostItem from "./PostItem";
import classes from './PostList.module.css'

const PostList = ({posts, title, remove}) => {
    return (
        <div className={classes.post_list}>
            <h1>{title}</h1>
            {posts.map((post, index) => <PostItem number={index + 1} post={post} key={post.id} remove={remove}/>)}
        </div>
    );
};

export default PostList;