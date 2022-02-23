export default function PostBox(props) {
    return (
        <div className="reply-box">
            <div className="avatar">
                <img src={props.avatar} alt='avatar'/>
            </div>
            <textarea placeholder="Add a comment..."/>
            <button className="button send">Send</button>
        </div>
    )
}