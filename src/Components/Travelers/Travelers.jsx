import React, {useEffect}  from 'react'

import paris from '../../assets/paris.jpg'
import rio from '../../assets/rio.jpg'
import dubai from '../../assets/dubai.jpg'
import london from '../../assets/london.jpg'

import traveler1 from '../../assets/user1.jpg'
import traveler2 from '../../assets/user2.jpg'
import traveler3 from '../../assets/user3.jpg'
import traveler4 from '../../assets/user4.jpg'

// Import AOS ===============>
import Aos from 'aos'
import 'aos/dist/aos.css'


const travelers=[
  {
    id:1,
    destinationImage:paris,
    travelerImage:traveler1,
    travelerName:'IsraTech',
    socialLink:'@isratech8'
  },
  
  {
    id:2,
    destinationImage:dubai,
    travelerImage:traveler3,
    travelerName:'Wilson Lindsey',
    socialLink:'@wilsonlindsey'
  },
  {
    id:3,
    destinationImage:rio,
    travelerImage:traveler2,
    travelerName:'Nicole Web',
    socialLink:'@nicoleweb'
  },
  {
    id:4,
    destinationImage:london,
    travelerImage:traveler4,
    travelerName:'Naresh Lamer',
    socialLink:'@nareshlamer'
  },
]

const Travelers = () => {

 // UseEffect to set animation duration ===>
useEffect(()=>{
  Aos.init({duration:2000})
},[]) 
  return (
    <div className='travelers container section' >
      <div className="sectionContainer">
        <h2 data-aos='fade-dwon' data-aos-duration='2500' >
          Top travelers of the month!
        </h2>

        <div className="travelersContainer grid">
          {travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
            {/* Single passanger card */}
         return <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
            <img src={destinationImage} alt="" className='destinationImage' />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={travelerImage} alt="" className='travelerImage' />
              </div>
              <div className='travelerName' >
                <span>{travelerName}</span>
                <p>{socialLink}</p>
              </div>
            </div>
          </div>;
          })}
        </div>


      </div>
    </div>
  )
}

export default Travelers