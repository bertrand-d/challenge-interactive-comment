import replyIcon from '../images/icon-reply.svg'
import ReplyBox from './ReplyBox'
import data from '../data/data.json'
import {useState} from 'react'

export default function SubCommentBox(props) {

    const [reply, setReply] = useState(false);
    const [editScore, setEditScore] = useState(props.subComment.score);

    function addScore() {
        setEditScore(editScore +1)
    }

    function lessScore() {
        setEditScore(editScore -1)
    }

    return (
        <>
        <div className="box comment subcomment">
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
                        <img src={process.env.PUBLIC_URL + props.subComment.user.image.png} alt="avatar"/>
                        <span>{props.subComment.user.username}</span>
                    </span>
                    <span className="time">{props.subComment.createdAt}</span>
                    <span className="reply" onClick={ () => setReply(!reply)}>
                        <img src={replyIcon}alt="reply icon"/>
                        <span>Reply</span>
                    </span>
                </div>
                <p className="comment-content">{props.subComment.content}
                </p>
            </div>
        </div>
        {}
        
        {reply && <ReplyBox avatar={data.currentUser.image.png} subStyle="subreply-box" />}
        </>
    );
}