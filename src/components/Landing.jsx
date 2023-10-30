import hand from '../assets/hand1.png'

function Landing () {
    return(
        <>
        <div className="flex items-center justify-center p-1">
  <h1 className="text-custom-color font-roboto text-5xl font-normal font-normal leading-normal tracking-tight">
    Q PAY
  </h1>
</div>

       <div className="flex justify-center items-center ">
      <img
        src={hand}
        className="w-1/6 h-auto max-w-screen-lg m-4 mb-10"
        style={{ transform: 'rotate(4deg)' }}
        alt="Hand Image"
      />
       
    </div>
        </>
    )
}
export default Landing