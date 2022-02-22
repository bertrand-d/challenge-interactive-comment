export default function CommentBox() {

    return (
        <div className="box comment">
            <div className="notation">
                <span className="plus">
                    +
                </span>
                <span>12</span>
                <span className="minus">
                    -
                </span>
            </div>
            <div>
                <div className="top">
                    <span className="avatar">
                        {/* <img src="./front/images/avatars/image-amyrobson.png" alt="avatar"> */}
                        <span>Amy Rhobson</span>
                    </span>
                    <span className="time">1 month ago</span>
                    <span className="reply">
                        {/* <img src="./front/images/icon-reply.svg" alt="reply icon"> */}
                        <span>Reply</span>
                    </span>
                </div>
                <p className="comment-content">Impressive ! I tought it seems the drag feature could be imprived. But overall it looks incredible.
                    You've nailed the design and the responsiveness at various breakpoints works really well
                </p>
            </div>
        </div>
    );
}