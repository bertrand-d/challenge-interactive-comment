import replyIcon from '../images/icon-reply.svg'

export default function CommentBox(props) {

    console.log(props)
    return (
        <div className="comment-container">
            <div className="box comment">
                <div className="notation">
                    <span className="plus">
                        +
                    </span>
                    <span>{props.score}</span>
                    <span className="minus">
                        -
                    </span>
                </div>
                <div>
                    <div className="top">
                        <span className="avatar">
                            <img src={process.env.PUBLIC_URL + props.avatar} alt="avatar"/>
                            <span>{props.autor}</span>
                        </span>
                        <span className="time">{props.date}</span>
                        <span className="reply">
                            <img src={replyIcon}alt="reply icon"/>
                            <span>Reply</span>
                        </span>
                    </div>
                    <p className="comment-content">{props.content}
                    </p>
                </div>
            </div>

            {props.children}
        </div>
    );
}