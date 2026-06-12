

function Comment({comments}) {
  return comments?.map((comment) => (
    <div className="p-4  border-l-2">
            <div className="flex items-center  gap-2">
                <img className="" src={comment?.userImage} width={20} height={20} alt="user-image"/>
                <p>{comment.userName}</p>
            </div>
            <div className="pl-6">{comment.comment}</div>
        {comment.replies &&  <Comment  comments = {comment.replies} /> }
    </div>
  ))
}

export default Comment