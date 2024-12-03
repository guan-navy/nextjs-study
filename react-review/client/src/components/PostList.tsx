import Post from "./Post.tsx";
import classes from "./PostList.module.css";
import NewPost from "./NewPost.tsx";

import Modal from "./Modal.tsx";
import {useState} from "react";
import {PostData} from "../types/posTypes.ts";

function PostList({isPosting, onStopPosting}: {
                      isPosting: boolean;
                      onStopPosting: () => void;
                      postData: PostData
                  }
) {

    const [posts, setPosts] = useState<PostData[]>([]);
    const addPostHandler = (postData: PostData) => {
        setPosts([postData, ...posts])
    }

    return (
        <>
            {isPosting && <Modal onClose={onStopPosting}>

                <NewPost
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                />
            </Modal>}
            {posts.length && <ul className={classes.posts}>
                {posts.map((post, index) =>
                    <Post
                        key={index}
                        author={post.author}
                        body={post.body}
                    />)}
            </ul>}
            {posts.length === 0 && <div style={{textAlign: "center"}}><h2>
                No posts yet.
            </h2></div>}
        </>
    );
}

export default PostList;