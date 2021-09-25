import React from 'react';
import BlueButton from "../UI/BlueButton";
import classes from './PostItem.module.css'

const PostItem = ({number, post, remove}) => {
    return (
        <div className={classes.post_item}>
            <div>
                <h3>{number}. {post.title}</h3>
                <p>{post.description}</p>
            </div>
            <BlueButton onClick={() => remove(post)}>Удалить</BlueButton>
        </div>
    );
};

export default PostItem;