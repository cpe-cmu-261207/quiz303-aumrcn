import { comments } from "../data/comments"
import Replies from "./Replies"

const NormalComment = () => {
    return (
        <div>
            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={comments[0].userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">{comments[0].username}</p>
                    <p>{comments[0].commentText}</p>
                    {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                    <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>{comments[0].likeNum} คน</p>
                    </div>
                </div>
            </div>
            <Replies/>
            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={comments[1].userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">{comments[1].username}</p>
                    <p>{comments[1].commentText}</p>
                    {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                    <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>{comments[1].likeNum} คน</p>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default NormalComment