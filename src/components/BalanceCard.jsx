import { useState } from "react"
import { Link } from "react-router-dom"
import plus from "../assets/Frame 15.svg"
import minus from "../assets/Frame 16.svg"
import p2p from "../assets/Frame 9.png"


function BalanceCard() {
  const [activeCard, setActiveCard] = useState(1);

  

  return (
    <>
    <div className='bg-bglight whitespace-nowrap'>
         <div className='mx-auto flex max-w-md items-center justify-between p-4 m-4 mb-0'>
             <div className=' max-w-min items-center justify-between  '>
                <h4>Wallet Balance</h4>
                <h1 className='font-bold'>NGN 200,150.00</h1>
             </div>
        </div>
        <div className="mx-auto flex max-w-md items-center justify-between p-4 m-2 mt-0">
  <div className="flex gap-4">
    
    
    <Link to=''>
    <button className="flex items-center justify-center w-28 h-10 bg-white text-custom-purple font-semibold text-base rounded-md border border-custom-purple">
     <img src={plus} className="p-2"/>
      Deposit
    </button>
    </Link>
    <Link to=''>
    <button className="flex items-center justify-center w-28 h-10 bg-white text-custom-purple font-semibold text-base rounded-md border border-custom-purple">
    <img src={minus} className="p-1"/>
      Withdraw
    </button>
    </Link>
    
  </div>
</div>

    </div>

    <div className='bg-bglight whitespace-nowrap'>
         <div className='mx-auto flex max-w-md items-center justify-between p-4 m-4'>
          <Link to='/p2p'>
          <img src={p2p} className="w-100%" />
          </Link> 
        </div>
    </div>
    </>
  )
}

export default BalanceCard
