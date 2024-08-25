import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export function Map() {

    return (
        <>
            <div className="my-5 flex items-center gap-3"><FontAwesomeIcon icon={faMapLocationDot} size="xl" /> Map Location</div>
            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29204.31800449363!2d90.35776!3d23.799398399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0df97d4b5cf%3A0xabe812291a20b374!2sShiyal%20Bari%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1724251115351!5m2!1sen!2sbd" height="450"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}