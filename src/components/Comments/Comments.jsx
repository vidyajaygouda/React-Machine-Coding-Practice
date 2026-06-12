import Comment from "./Comment";


function Comments() {
    const comments = [
        {
            userName: "Vidya",
            comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
            userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
        },
         {
            userName: "Vidya",
            comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
            userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
            replies: [
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                     userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                      replies: [
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
            
            ]
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                     userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                     replies: [
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                     userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
            ]
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
            ]
        },
         {
            userName: "XYZ",
            comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
            userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
             replies: [
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                     replies: [
                                {
                                    userName: "Vidya",
                                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                                },
                                {
                                    userName: "Vidya",
                                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                                     replies: [
                                            {
                                                userName: "Vidya",
                                                comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                                                userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                                                 replies: [
                                                        {
                                                            userName: "Vidya",
                                                            comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                                                            userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                                                        }]
                                            }]
                                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                     replies: [
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
            ]
                },
            ]
                },
                {
                    userName: "Vidya",
                    comment: "For grading, report cards, or peer review, effective comments identify specific strengths and offer concrete ways to improve rather than being vague",
                    userImage: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
                },
            ]
        },
    ]
  return (
    <div className="m-10 ">
       <Comment comments = {comments} />
    </div>
  )
}

export default Comments;