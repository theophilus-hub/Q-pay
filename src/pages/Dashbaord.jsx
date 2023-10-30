import Header from "../components/Header"
import DashboardHeader from "../components/DashboardHeader"
import BalanceCard from "../components/BalanceCard"
import TransactionCard from "../components/TransactionCard"

function Dashbaord() {
  return (
    <>
    <DashboardHeader />
    <BalanceCard />
    <div className='bg-bglight whitespace-nowrap'>
         <div className='mx-auto flex max-w-md items-center justify-between px-4 mb-0'>
            <h2>Recent Transactions</h2>
         </div>
    </div>
    <TransactionCard credit={false} time='11:04 12/12/23' amount='18,750' />
    <TransactionCard credit={true} time='11:04 12/12/23' amount='200,050' />
    <TransactionCard credit={false} time='11:04 12/12/23' amount='180,750' />
    <TransactionCard credit={true} time='11:04 12/12/23' amount='148,750' />
    <TransactionCard credit={true} time='11:04 12/12/23' amount='400,750' />
    <TransactionCard credit={false} time='11:04 12/12/23' amount='18,750' />
    <TransactionCard credit={false} time='11:04 12/12/23' amount='380,750' />
    <TransactionCard credit={true} time='11:04 12/12/23' amount='168,750' />
    <TransactionCard credit={true} time='11:04 12/12/23' amount='186,750' />
    <TransactionCard credit={false} time='11:04 12/12/23' amount='68,750' />
    
    </>
  )
}

export default Dashbaord
