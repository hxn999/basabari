import { faBangladeshiTakaSign, faClock, faEye, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { img } from "../../assets/assets.js";
import moment from "moment";
import { faFacebook, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

export function RentCard({ owner, impression, date, rentDate, rent, advance, utility ,available,mobile}) {
  let [copy, setCopy] = useState("Copy")

  const readableDate = rentDate.split("T")[0].split("-")
  let month = null

  const time = moment(date)
  const contactModal = <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
      <h3 className="text-lg text-black font-black">Contact Owner</h3>

      {/* owner phone number  */}
      <p className="py-4 flex gap-5 items-center text-xl font-semibold text-green-600"> <FontAwesomeIcon className="text-green-600" icon={faPhone} />  {owner.phone}
        <button onClick={() => {
          navigator.clipboard.writeText(owner.phone)
          setCopy("Copied!")
        }} className="btn bg-white-400 hover:bg-green-700">{copy}</button></p>


      {/* owner facebook id  */}
      {
        owner.fbLink ?

          <a target="_blank" href={owner.fbLink}>
            <p className="py-4 hover:cursor-pointer flex gap-5 items-center text-xl font-semibold">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#375ae6", }} />
              <p className="flex items-center gap-1 text-white bg-blue-600 p-1 rounded-xl px-2"><FontAwesomeIcon icon={faFacebookMessenger} style={{ color: "#ffffff", }} />Message in facebook</p>
            </p>
          </a>
          :
          null

      }

      <div className="modal-action">
        <form method="dialog" className="flex gap-5">
          <button className="btn bg-green-400 hover:bg-green-700">Call</button>
          <button onClick={() => setCopy("Copy")} className="btn bg-red-400 hover:bg-red-700">Close</button>
        </form>
      </div>
    </div>
  </dialog>


  switch (parseInt(readableDate[1])) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
    default:
      month = "Invalid month";
  }


  return (
    
      <div className="w-1/3 max-[900px]:w-full mt-10  max-[1024px]:mt-5">
        <div
          className="p-3 rounded-xl flex flex-col gap-3  shadow-lg border-2 border-gray-100">
          {/* -------------verification------------------------- */}
          <div className="flex gap-3 items-center">
            <img src={`http://localhost:3000/${owner.pfp}`} className="w-10 h-10 rounded-full object-cover" alt="" />
            <div>
              <p className="">Posted by <span className="font-medium">{owner.name}</span>
                <span className="text-[10px]">(Flat Owner)</span></p>
              <p className="flex items-center gap-1"><img src={img.check} className="w-5 h-5" alt="" /> Verified by
                <span className="font-bold"> Basa<span className="text-green-600">Bari</span></span>
              </p>
            </div>
          </div>
          {/* -------------infos------------------------------ */}

          <div className="flex items-center gap-1"><FontAwesomeIcon icon={faClock} />Posted  {time.fromNow()}</div>
          <div className="flex items-center gap-1"><FontAwesomeIcon icon={faEye} />{impression}  People saw this post</div>

          <div className="text-xl">Rent from <span className="font-bold">{`${readableDate[2]} ${month} ${readableDate[0]}`}</span></div>

        {/* checking availability */}
        {
          available?
          <div className="flex gap-3 items-center">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
             Available
          </div>
          :
          <div className="flex gap-3 font-semibold items-center">
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
           Booked !
        </div>
        }

          <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">{rent}</span> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> / <sub>month</sub></div>
          <div className="flex gap-2 items-center">Advance <span className="font-bold text-xl">{advance}</span> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> </div>
          {
            utility ? <div className="flex gap-2 items-center flex-wrap">Service Charges <span
              className="font-bold text-xl">{utility}</span> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> /
              <sub>month</sub> (Security Guard ,Water ,Gas)
            </div> : null
          }
          {/* --------------contact---------- */}
          <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-lg bg-green-400 rounded-xl py-4 flex gap-3 justify-center hover:bg-green-600 items-center font-semibold">
            <FontAwesomeIcon icon={faPhone} size={mobile?null:"xl"} />
            Contact Owner
          </button>

          {contactModal}
        </div>
      </div>
    
  )
}