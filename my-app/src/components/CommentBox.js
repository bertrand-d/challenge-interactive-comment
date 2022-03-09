import SubCommentBox from './SubCommentBox';
import replyIcon from '../images/icon-reply.svg'
import ReplyBox from './ReplyBox'
import {useState} from 'react'

export default function CommentBox(props) {
    let commentStorage = JSON.parse(localStorage.getItem('comment'));
    let comment = commentStorage.comments[props.id];

    const [reply, setReply] = useState(false);
    const [editScore, setEditScore] = useState(comment.score);

    function addScore() {
        setEditScore(editScore +1)
    }

    function lessScore() {
        setEditScore(editScore -1)
    }

    return (
        <div className="comment-container">
            <div className="box comment">
                <div className="notation">
                    <span className="plus" onClick={addScore}>
                        +
                    </span>
                    <span>{editScore}</span>
                    <span className="minus" onClick={lessScore}>
                        -
                    </span>
                </div>
                <div>
                    <div className="top">
                        <span className="avatar">
                            <img src={process.env.PUBLIC_URL + comment.user.image.png} alt="avatar"/>
                            <span>{comment.user.username}</span>
                        </span>
                        <span className="time">{comment.createdAt}</span>
                        <span className="reply" onClick={ () => setReply(!reply)}>
                            <img src={replyIcon}alt="reply icon"/>
                            <span>Reply</span>
                        </span>
                    </div>
                    <p className="comment-content">{comment.content}
                    </p>
                </div>
            </div>
            {
                comment.replies.map((comment, index) => {
                    return (
                        <SubCommentBox key={"subComment" + index} subComment={comment}/>
                    )
                })
            }
            {reply && <ReplyBox avatar={commentStorage.currentUser.image.png}/>}   
        </div>
    );
}