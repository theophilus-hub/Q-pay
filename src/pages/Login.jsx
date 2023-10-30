import Header from "../components/Header"
import backArrow from '../assets/navigate_before.svg'
import Input from "../components/Input"
import { Link } from "react-router-dom"

function Login() {
  return (
     <>
     <Header />
    <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center">
    <Link to='/'>
     <img src={backArrow} alt="Tiny Icon" className="w-6 h-6 mr-1 mt-3" />
    </Link>
 
  <h2 className="mt-2 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
    Login
  </h2>
</div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" action="/login" method="POST">
            
           
            <Input label='Email' type='email' id='email'/>
            <Input label='Password' type='password' id='pswd'/>
            
            
            

            <div className="flex justify-center items-center">
              <Link to='/dashboard'>
               <button
                type="submit"
                className="mt-6 flex items-center justify-center w-28 h-14 bg-custom-purple text-white font-semibold text-base rounded-md justify-center">
                Login 
              </button>
              </Link>
             
            </div>
          </form>

          
        </div>
      </div>
     </>
  )
}

export default Login
