export default function ReplyBox(props) {
    return (
        <div className="reply-box">
            <div className="avatar">
                <img src={props.avatar} alt='avatar'/>
            </div>
            <textarea/>
            <button className="button send">Reply</button>
        </div>
    )
}