import React from 'react'

const LocationSearchPanel = (props) => {
  // console.log(props);
  
  // sample array for location
  const location = [
    "Gateway of India is located at Apollo Bandar, Colaba, Mumbai",
    "Upvan Lake, Unnamed Road, Thane West, Thane - 400606",
    "5, Powai Birds Watching Site, Nehru Nagar, Powai, Mumbai",
    "H-3, Budhyadev Mandir Marg, Sector 4, Sanpada, Navi Mumbai"
  ]

  return (
    <div>
      {/* This is just a sample data */}

      {
        location.map((location, index) => (
          <div 
            key={index} 
            onClick={() => {
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }} 
            className='flex items-center justify-start gap-3 my-4 border-2 p-3 rounded-xl border-gray-50 active:border-black' 
          >
            <h2 className='bg-[#eee] h-9 w-16 rounded-full flex items-center justify-center'><i className='ri-map-pin-fill '></i></h2>
            <h4 className='font-medium'>{location}</h4>
          </div>
        ))
      }

      {/* <div className='flex items-center justify-start gap-3 my-4 border-2 p-3 rounded-xl border-gray-50 active:border-black' >
        <h2 className='bg-[#eee] h-9 w-16 rounded-full flex items-center justify-center'><i className='ri-map-pin-fill '></i></h2>
        <h4 className='font-medium'>Gateway of India is located at Apollo Bandar, Colaba, Mumbai</h4>
      </div> */}

    </div>
  )
}

export default LocationSearchPanel