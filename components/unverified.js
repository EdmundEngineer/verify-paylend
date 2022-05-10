
function Unverified() {

  return (
    <>


      <div className='flex items-center flex-col justify-center min-h-screen bg-white sm:bg-gray-100'>
        <div className='px-8 py-6 mt-4 text-left bg-white sm:shadow-lg w-full sm:rounded sm:w-1/3'>
          <div className='mb-7 flex justify-center'>
            <img src={"/assets/images/unverified.png"} alt='Logo' className='w-50 h-60' />
              {/* <Image className='w-16 h-16'
               src={"/assets/images/verified.png"}
               width={"200px"}
               height={"132px"}
               alt={""}
               layout="responsive"
               objectFit="contain"
               priority={true}
                /> */}
          </div>
          <h3 className='text-xl mb-4 font-medium font-gotham-rounded-medium text-center text-secondary-900'>
            <p>Your email verification link has expired</p>
          </h3>

                  <button 
                 
                  className='bg-primary rounded-md font-body p-2 text-xs font-semibold flex justify-center items-center  text-white pl-7 pr-7'
             
                >
                RESEND LINK
                </button>





        
        </div>
      </div>
    </>
  )
}


export default Unverified
