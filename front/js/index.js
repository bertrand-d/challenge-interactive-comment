console.log(data.comments)

let commentsContainer = document.getElementById('comments-container')

data.comments.forEach(comment => {
    //comment posted
    let boxComment = document.createElement('div')
    boxComment.classList.add('box', 'comment')
    commentsContainer.appendChild(boxComment)

    let notation = document.createElement('div')
    notation.classList.add('notation')
    boxComment.appendChild(notation)

    let plus = document.createElement('span')
    plus.classList.add('plus')
    plus.innerText = '+'
    notation.appendChild(plus)

    let score = document.createElement('span')
    score.innerText = comment.score
    notation.appendChild(score)

    let minus = document.createElement('span')
    minus.classList.add('minus')
    minus.innerText = "-"
    notation.appendChild(minus)

    let commentContainer = document.createElement('div')
    boxComment.appendChild(commentContainer)

    let top = document.createElement('div')
    top.classList.add('top')
    commentContainer.appendChild(top)

    let avatar = document.createElement('span')
    avatar.classList.add('avatar')
    top.appendChild(avatar)

    let avatarImg = document.createElement('img')
    avatarImg.src = comment.user.image.png
    avatar.appendChild(avatarImg)
    
    let avatarPseudo = document.createElement('span')
    avatarPseudo.innerText = comment.user.username
    avatar.appendChild(avatarPseudo)

    let time = document.createElement('span')
    time.classList.add('time')
    time.innerText = comment.createdAt
    top.appendChild(time)

    let reply = document.createElement('span')
    reply.classList.add('reply')
    top.appendChild(reply)

    let replyIcon = document.createElement('img')
    replyIcon.src = './front/images/icon-reply.svg'
    reply.appendChild(replyIcon)

    let replyText = document.createElement('span')
    replyText.innerText = 'Reply'
    reply.appendChild(replyText)
    
    let commentContent = document.createElement('p')
    commentContent.classList.add('comment-content')
    commentContent.innerText = comment.content
    commentContainer.appendChild(commentContent)

});