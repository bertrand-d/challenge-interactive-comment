import CommentBox from './components/CommentBox'
import data from './data/data.json'

function App() {

  
  const commentsArray = []

  data.comments.forEach(comment => {
    console.log(comment.user)
    commentsArray.push(<CommentBox autor={comment.user.username} avatar={comment.user.image.png} content={comment.content} date={comment.createdAt} score={comment.score}/>)   
  });

  return (
    <div className="App">
      <main id="comments-container">
        {commentsArray}
      </main>
    </div>
  );
}

export default App;
