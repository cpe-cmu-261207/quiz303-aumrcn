import { comments } from "../data/comments"

const Post = () => {

    return (
        <div className="space-y-2 ">

            {/* image and name */}
            <div className="flex space-x-2 items-center">
                <img className="w-12 h-12 rounded-full" src="/profileImages/aumaum.jpg"></img>
                <span className='font-semibold text-lg'>Ratchanon Niwat 630610756</span>
            </div>

            {/* status message */}
            <p>ทำได้หมดยกเว้น map แงแง แสดงลำดับถูก ใส่ข้อมูลถูก 
                ซ่อนปุ่มไลค์แต่ทำแบบไม่ได้แมพ อย่างน้อยก็มีคะแนนหมดยกเว้น map นะพี่อาร์ม :)</p>

            {/* like section */}
            <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>987 คน</p>
            </div>
        </div>

    )
}



export default Post;