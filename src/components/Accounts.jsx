import { Link } from "react-router-dom"

function Accounts() {
  return (
    <div className="flex justify-center items-center">
  <div className="flex gap-4 my-6">
    
    <Link to='/signup'>
    <button className="flex items-center justify-center w-28 h-14 bg-custom-purple text-white font-semibold text-base rounded-md">
      Sign up
    </button>
    </Link>
    
    <Link to='/login'>
    <button className="flex items-center justify-center w-28 h-14 bg-white text-custom-purple font-semibold text-base rounded-md border border-custom-purple">
      Login
    </button>
    </Link>
    
  </div>
</div>

   
  )
}

export default Accounts
