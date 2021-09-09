import { comments } from "../data/comments"
import CommentSection from "./CommentSection";



const Post = () => {

    return (
        <div className="space-y-2">

            {/* image and name */}
            <div className="flex space-x-2 items-center">
                <img className="w-12 h-12 rounded-full" src="/profileImages/aumaum.jpg"></img>
                <span className='font-semibold text-lg'>Ratchanon Niwat 630610756</span>
            </div>

            {/* status message */}
            <p>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>

            {/* like section */}
            <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>100 คน</p>
            </div>
            <CommentSection/>

        </div>

    )
}



export default Post;