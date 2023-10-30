import Input from "../components/Input"
import { Link } from "react-router-dom"
import cloan from "../assets/Frame 54.png"
import track from "../assets/Frame 53.png"

function P2p() {
  return (
    <>
     <div className='bglight'>
  <div className='mx-auto flex max-w-md items-center justify-between p-4 px-4 m-4 bg-white '>
    <div className='flex max-w-lg items-center justify-between  '>
      <Input place='Search' />
</div>

</div><div className="mx-auto flex max-w-md items-center justify-between p-4 m-2 mt-0">
  <div className="flex gap-4">
    
    
    <Link to=''>
    <div className="flex items-center justify-center w-28 h-12">
     <img src={cloan} className=""/>
      
    </div>
    </Link>
    <Link to=''>
    <div className="flex items-center justify-center w-28 h-12">
    <img src={track} className=""/>
    </div>
    </Link>
    
  </div>
</div>
</div>
    </>
  )
}

export default P2p
