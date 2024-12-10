import React from 'react'

const ConfirmedRide = (props) => {
  
  return (
    <div>
      <h5 
            className='absolute p-1 text-center top-0 w-[93%]'
            onClick={() => {
                props.setConfirmRidePanel(false)
            }}
        ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
        <div 
          className='flex gap-2 flex-col items-center justify-between'
        >
          <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <h5><i className='text-lg ri-map-pin-user-fill'></i></h5>
              <div>
                <h3 className='text-lg font-medium'>562/11 - A</h3>
                <p className='text-sm -mt-1 text-gray-600'>Narendra Modi Stadium, Ahemdabad</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <h5><i className='text-lg ri-map-pin-2-fill'></i></h5>
              <div>
                <h3 className='text-lg font-medium'>562/11 - A</h3>
                <p className='text-sm -mt-1 text-gray-600'>Narendra Modi Stadium, Ahemdabad</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
              <h5><i className='text-lg ri-currency-line'></i></h5>
              <div>
                <h3 className='text-lg font-medium'>₹65.70</h3>
                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => {
              props.setVehicleFound(true)
              props.setConfirmRidePanel(false)
            }}
            className='w-full mt-5 bg-green-600 font-semibold text-white p-2 rounded-lg'
          >
            Confirm
          </button>
        </div>
    </div>
  )
}

export default ConfirmedRide