import classes from './Post.module.css'



function Post({author, body}: { author: string; body: string }) {

    return (
        <>
            <div className={classes.post}>
                < div className={classes.author}>{author}</div>
                <div className={classes.text}>{body}</div>
            </div>

        </>


    );
}

export default Post;