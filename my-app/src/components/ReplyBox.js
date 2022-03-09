export default function ReplyBox(props) {
    return (
        <div className={`reply-box ${ props.subStyle }`} >
            <div className="avatar">
                <img src={props.avatar} alt='avatar'/>
            </div>
            <textarea placeholder="Add a reply..."/>
            <button className="button send">Reply</button>
        </div>
    )
}