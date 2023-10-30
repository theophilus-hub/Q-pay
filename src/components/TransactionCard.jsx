import { Link } from "react-router-dom"
import gplus from "../assets/Frame 14.svg"
import rminus from "../assets/Frame 13.svg"

function TransactionCard({credit, time, amount}) {
  return (
    <>
   <div className='bglight'>
  <div className='mx-auto flex max-w-md items-center justify-between p-4 px-4 m-4 bg-white '>
    <div className='flex max-w-min items-center justify-between  '>
      
      <div className="w-10 h-10">
        <img
          src={credit ? gplus: rminus}
          className=" "
        />
      </div>
      <div>
         <h1 className="font-bold">{credit ? 'Credited': 'Debited '} </h1>
        <h1 className="whitespace-nowrap">{time}</h1>
      </div>
       
      
     
    </div>
    <div className="p-4 mx-2">
      #{amount}
    </div>
  </div>
</div>
    </>
  )
}

export default TransactionCard
