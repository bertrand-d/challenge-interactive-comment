import CommentBox from "../components/CommentBox";
import PostBox from "../components/PostBox"
import data from '../data/data.json'

export default function Homepage() {
    localStorage.setItem("comment", JSON.stringify(data));
    let commentStorage = JSON.parse(localStorage.getItem('comment'));

    return(
        <>
            {
                commentStorage.comments.map((comment, index) => {
                    return (
                        <CommentBox key={"comment" + index} id={index}/> 
                    )
                })
            }
            <PostBox avatar={commentStorage.currentUser.image.png} />
        </>
    );
}