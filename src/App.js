import './App.css';
import React, {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SimpleSelect from "./UI/SimpleSelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'a post 1', description: 'n text-text-text'},
        {id: 2, title: 'f post 2', description: 't text-text-text'},
        {id: 3, title: 'c post 3', description: 'l text-text-text'},
        {id: 4, title: 'b post 4', description: 'a text-text-text'},
        {id: 5, title: 'n post 5', description: 'r text-text-text'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function sortPosts(sort) {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div>
            <PostForm create={createPost} posts={posts}/>
            <hr style={{margin: '15px 0'}} />
            <SimpleSelect
                defaultValue="сортировка"
                value={selectedSort}
                onChangeSelect={sortPosts}
                options={
                    [
                        {value: 'title', name: 'по названию'},
                        {value: 'description', name: 'по тексту'}
                    ]
                }
            />
            <PostList
                setposts={setPosts}
                posts={posts}
                remove={removePost}
                title="Posts list"/>
        </div>
    );
}

export default App;
