import { comments } from "../data/comments"

const Replies = () => {
    return (
        <div>
            <div className="flex p-2 items-start space-x-2 pl-14">
                <img className="w-10 w-10 rounded-full" src={comments[0].replies[0].userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">{comments[0].replies[0].username}</p>
                    <p>{comments[0].replies[0].commentText}</p>
                </div>
            </div>

            <div className="flex p-2 items-start space-x-2 pl-14">
                <img className="w-10 w-10 rounded-full" src={comments[0].replies[1].userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">{comments[0].replies[1].username}</p>
                    <p>{comments[0].replies[1].commentText}</p>
                    <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>{comments[0].replies[1].likeNum} คน</p>
                    </div>
                </div>
            </div>
        </div>




    )
}


export default Replies