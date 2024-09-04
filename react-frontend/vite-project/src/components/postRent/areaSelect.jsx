import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '../../../redux/slice/formSlice.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export function AreaSelect() {

    const dispatch = useDispatch()
    const formData = useSelector(state => state.form)
    function handleArea(e) {
        dispatch(formActions.setString({ key: "area", value: e.target.value }))
        dispatch(formActions.formValidate())
    }
    useEffect(() => {

        console.log(formData.area)
    })
    return (

        <div className='flex flex-col gap-4 '>

            <h3 className='font-semibold'> Area Name<span className='text-red-700 text-lg'>*</span></h3>
            <div className='relative'>

                <FontAwesomeIcon className='absolute right-10 text-green-600 top-5' icon={faAngleDown} />
                <select className={`appearance-none w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 ${formData.errorState.errors.area ? "border-red-700 focus:border-red-900" : null}`} name="area" id="" placeholder='Enter your full address ' value={formData.area} onChange={handleArea}>
                    <option value="select">Select Your Residence Area</option>
                    <option value="Adabor">Adabor</option>
                    <option value="Adabor">Adabor</option>
                    <option value="Airport">Airport</option>
                    <option value="Badda">Badda</option>
                    <option value="Banani">Banani</option>
                    <option value="Bangshal">Bangshal</option>
                    <option value="Bhashantek">Bhashantek</option>
                    <option value="Cantonment">Cantonment</option>
                    <option value="Chawkbazar">Chawkbazar</option>
                    <option value="Darussalam">Darussalam</option>
                    <option value="Daskhinkhan">Daskhinkhan</option>
                    <option value="Demra">Demra</option>
                    <option value="Dhamrai">Dhamrai</option>
                    <option value="Dhanmondi">Dhanmondi</option>
                    <option value="Dohar">Dohar</option>
                    <option value="Gandaria">Gandaria</option>
                    <option value="Gulshan">Gulshan</option>
                    <option value="Hazaribag">Hazaribag</option>
                    <option value="Jatrabari">Jatrabari</option>
                    <option value="Kafrul">Kafrul</option>
                    <option value="Kalabagan">Kalabagan</option>
                    <option value="Kamrangirchar">Kamrangirchar</option>
                    <option value="Keraniganj">Keraniganj</option>
                    <option value="Khilgaon">Khilgaon</option>
                    <option value="Khilkhet">Khilkhet</option>
                    <option value="Kotwali">Kotwali</option>
                    <option value="Lalbag">Lalbag</option>
                    <option value="Mirpur">Mirpur</option>
                    <option value="Mohammadpur">Mohammadpur</option>
                    <option value="Motijheel">Motijheel</option>
                    <option value="Mugda">Mugda</option>
                    <option value="Nawabganj">Nawabganj</option>
                    <option value="New Market">New Market</option>
                    <option value="Others">Others</option>
                    <option value="Pallabi">Pallabi</option>
                    <option value="Paltan">Paltan</option>
                    <option value="Purbachal">Purbachal</option>
                    <option value="Ramna">Ramna</option>
                    <option value="Rampura">Rampura</option>
                    <option value="Rupnagar">Rupnagar</option>
                    <option value="Sabujbag">Sabujbag</option>
                    <option value="Savar">Savar</option>
                    <option value="Shah Ali">Shah Ali</option>
                    <option value="Shahbag">Shahbag</option>
                    <option value="Shahjahanpur">Shahjahanpur</option>
                    <option value="Sher-E-Bangla Nagar">Sher-E-Bangla Nagar</option>
                    <option value="Shyampur">Shyampur</option>
                    <option value="Sutrapur">Sutrapur</option>
                    <option value="Tejgaon">Tejgaon</option>
                    <option value="Tejgaon I/A">Tejgaon I/A</option>
                    <option value="Turag">Turag</option>
                    <option value="Uttara">Uttara</option>
                    <option value="Uttara West">Uttara West</option>
                    <option value="Uttarkhan">Uttarkhan</option>
                    <option value="Vatara">Vatara</option>
                    <option value="Wari">Wari</option>
                </select>
            </div>
            <p className='pl-8 error text-xs text-red-700'>{formData.errorState.errors.area}</p>
        </div>


    )
}
