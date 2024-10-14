import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faBolt, faBottleDroplet, faCalculator, faCircleInfo, faElevator, faFire, faGasPump, faPersonMilitaryPointing, faSquareParking, faTty, faVideo, faWifi } from "@fortawesome/free-solid-svg-icons"

export function Amenities({ amenities }) {


   const amenity = {

    natural: {
        text: "Natural Gas",
        icon: faFire
    },
    meter: {
        text: "Prepaid Meter Gas",
        icon: faGasPump
    },
    lpg: {
        text: "LPG Cylinder Gas",
        icon: faBottleDroplet
    },
    prepaid: {
        text: "Prepaid Meter Electricity",
        icon: faCalculator
    },
    postpaid: {
        text: "Postpaid Meter Electricity",
        icon: faBolt
    },
    elevator: {

        text: "Elevetor/Lift",
        icon: faElevator

    },
    wifi: {

        text: "Wi-Fi Internet",
        icon: faWifi
        
    },
    security: {

        text: "Security Guard",
        icon: faPersonMilitaryPointing

    },
    intercom: {

        text: "Inter Communication Telephone",
        icon: faTty

    },
    cctv: {

        text: "CCTV surveillance",
        icon: faVideo

    },
    parking:{
        text:"Parking Area",
        icon:faSquareParking
    }
}




  return (
    <>
      <h1 className='font-medium my-3 text-xl'>
        <FontAwesomeIcon icon={faCircleInfo} />  Amenities
      </h1>
      <div className="flex  flex-wrap  gap-4">
        {/* ----------------gas type----------------- */}
        <div className="flex w-20 aspect-square flex-col items-center justify-center gap-3 text-center bg-green-400 rounded-xl p-2">
          <FontAwesomeIcon icon={amenity[amenities.gas].icon} />
          <p className="text-xs font-semibold">{amenity[amenities.gas].text}</p>
        </div>
        {/* ------------ electricity type ----------------------------------- */}
        <div className="flex w-20 aspect-square flex-col items-center justify-center gap-3 text-center bg-green-400 rounded-xl p-2">
          <FontAwesomeIcon icon={amenity[amenities.electricity].icon} />
          <p className="text-xs font-semibold">{amenity[amenities.electricity].text}</p>
        </div>
        {/* -----------other amenities------------------------- */}

        {

          Object.keys(amenities).map((key) => {
            if (key == 'gas' || key == 'electricity') return
            console.log(amenities[key])
            return amenities[key] ?
              <div className="flex w-20 flex-col aspect-square items-center justify-center gap-3 text-center bg-green-400 rounded-xl p-2">
                <FontAwesomeIcon icon={amenity[key].icon} />
                <p className="text-[10px] font-semibold">{amenity[key].text}</p>
              </div> : null

          }

          )}
      </div>
    </>
  )
}
