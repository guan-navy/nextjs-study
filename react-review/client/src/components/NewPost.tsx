import classes from './NewPost.module.css';
import React, {useState} from "react";
import {PostData} from "../types/posTypes.ts";

function NewPost({onCancel,onAddPost}: {
    onAddPost: (postData: PostData) => void;

    onCancel: () => void
}) {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const bodyChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredBody(event.target.value)
    }
    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredName(event.target.value)
    }
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const postData: PostData = {
            body: enteredBody,
            author: enteredName
        }
        onAddPost(postData)
        console.log(postData)
        onCancel()
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>

            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={nameChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type={"button"} onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;