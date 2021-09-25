import React, {useState} from 'react';
import BlueInput from "../UI/BlueInput";
import BlueButton from "../UI/BlueButton";

const PostForm = (props) => {

    const [post, setPost] = useState({title: '', description: ''})

    function getValue(e) {
        e.preventDefault()
        const newPost = {...post, id: Date.now()}
        props.create(newPost)
        setPost({title: '', description: ''})
    }

    return (
        <form {...props}>
            <BlueInput type="text" placeholder="название поста"
            value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <BlueInput type="text" placeholder="текст поста"
                       value={post.description} onChange={e => setPost({...post, description: e.target.value})}/>
            <BlueButton onClick={getValue}>Опубликовать</BlueButton>
        </form>
    );
};

export default PostForm;