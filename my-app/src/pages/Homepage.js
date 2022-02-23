import CommentBox from "../components/CommentBox";
import SubComment from '../components/SubCommentBox'
import data from '../data/data.json'

export default function Homepage() {

    return(
        <>
            {
                data.comments.map((comment, index) => {
                    return (
                        <CommentBox key={"comment" + index} score={comment.score} autor={comment.user.username} avatar={comment.user.image.png} date={comment.createdAt} content={comment.content} children={
                            data.comments[index].replies.map((subComment, i) => <SubComment key={'sub' + i} score={subComment.score} autor={subComment.user.username} avatar={subComment.user.image.png} date={subComment.createdAt} content={subComment.content} ></SubComment>)
                        }/> 
                    )
                })
            }
        </>
    );
}