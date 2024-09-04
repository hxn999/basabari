import FileBase64 from 'react-file-base64';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUpload } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import src from '../../assets/img/bed.webp'
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../../redux/slice/formSlice.js';
import { AreaSelect } from './areaSelect.jsx';
import { Toaster,toast } from 'sonner';

import { fetchingActions, formPost, singlePost, updatePost } from '../../../redux/slice/fetchSlice.js';
import { useParams } from 'react-router-dom';


export function EditPost() {

    const dispatch = useDispatch()
    const formData = useSelector(state => state.form)
    const fetchState = useSelector(state => state.fetching)
    console.log(formData)
    console.log(fetchState)
    // console.log(fetchState)
    let params = useParams()

    function handleBed(e) {
        dispatch(formActions.setValue({ key: "bed", value: parseInt(e.target.value) }))
        dispatch(formActions.formValidate())
        // setTimeout(() => {

        //     dispatch(fetchingActions.formValidate(formData))
        // }, 3000);



    }
    function handleBath(e) {
        dispatch(formActions.setValue({ key: "bath", value: parseInt(e.target.value) }))
        dispatch(formActions.formValidate())


    }
    function handleBalcony(e) {
        dispatch(formActions.setValue({ key: "balcony", value: parseInt(e.target.value) }))
        dispatch(formActions.formValidate())


    }
    function handlefloor(e) {
        dispatch(formActions.setValue({ key: "floorSize", value: parseInt(e.target.value) }))
        dispatch(formActions.formValidate())


    }
    function handleRent(e) {
        dispatch(formActions.setValue({ key: "rent", value: parseInt(e.target.value) }))
        dispatch(formActions.formValidate())


    }
    function handleCharge(e) {
        dispatch(formActions.setValue({ key: "charge", value: parseInt(e.target.value) }))
        dispatch(formActions.formValidate())


    }
    function handleDescription(e) {
        dispatch(formActions.setString({ key: "description", value: e.target.value }))
        dispatch(formActions.formValidate())


    }
    function handleDate(e) {
        dispatch(formActions.setString({ key: "rentDate", value: e.target.value }))
        dispatch(formActions.formValidate())


    }
    function handleMap(e) {
        dispatch(formActions.setString({ key: "mapSrc", value: e.target.value }))
        dispatch(formActions.formValidate())


    }
    function handleCategory(e) {
        dispatch(formActions.setString({ key: "chargeCategory", value: e.target.value }))
        dispatch(formActions.formValidate())


    }
    function handleAddress(e) {
        dispatch(formActions.setString({ key: "address", value: e.target.value }))
        dispatch(formActions.formValidate())


    }
    function handleid(e) {
        dispatch(formActions.setString({ key: "userid", value: e.target.value }))
        dispatch(formActions.formValidate())


    }
    function deleteImage(e) {
        dispatch(formActions.deleteImage(parseInt(e.target.id)))
        dispatch(formActions.formValidate())
        // console.log(e.target)
    }

    function updateHandler(e) {
        e.preventDefault()
        // fetchingActions.formValidate(formData)
        // let valid = new Promise((resolve,reject)=>{
        //     dispatch(fetchingActions.formValidate(formData))
        //     resolve("hi")
        // })
        // valid.then((lel)=>{ 
        //     if(fetchState.isValid)
        //     {

        //         dispatch(formPost(formData))
        //     }
        // })
        let user_id = JSON.parse(localStorage.getItem("user")).user_id
        dispatch(formActions.formValidate())
        if (formData.errorState.isValid) {
            dispatch(updatePost({id:params.post_id, data:{...formData, errorState: {},userid: user_id}}))
            toast.success('Rent has been Updated!')
        }

    }



    let error = {
        address: "border-red-700 focus:border-red-900",
        image: "border-red-700 focus:border-red-900",
        rent: "border-red-700 focus:border-red-900",
        rentDate: "border-red-700 focus:border-red-900",
        room: "border-red-700 focus:border-red-900",

    }

    let imageI = 0

    let imageElement = null
    // formData.images.map((e) => {
    //     return  <img    className="w-32 h-32 rounded-xl object-cover after:content-['fajdflkajdflkadjf'] after:ml-0.5 after:text-red-500" id={imageI++} src={e} alt="" onClick={deleteImage} /> 
    // })

    useEffect(() => {
        const input = document.querySelector("input[type='file']")
        input.accept = "image/*"
        input.id = "house"
        console.log(input)
        dispatch(singlePost(params.post_id))

        


    }, [dispatch,])
    useEffect(()=>{
        dispatch(formActions.setValue({ key: "bath", value: fetchState?.singlePost?.post[0].bath }))
        dispatch(formActions.setValue({ key: "bed", value: fetchState?.singlePost?.post[0].bed }))
        dispatch(formActions.setValue({ key: "balcony", value: fetchState?.singlePost?.post[0].balcony }))
        dispatch(formActions.setValue({ key: "floorSize", value: fetchState?.singlePost?.post[0].floorSize }))
        dispatch(formActions.setValue({ key: "rent", value: fetchState?.singlePost?.post[0].rent }))
        dispatch(formActions.setString({ key: "rentDate", value: fetchState?.singlePost?.post[0].rentDate }))
        dispatch(formActions.setString({ key: "address", value: fetchState?.singlePost?.post[0].address }))
        dispatch(formActions.setString({ key: "area", value: fetchState?.singlePost?.post[0].area }))
        dispatch(formActions.setString({ key: "images", value: fetchState?.singlePost?.post[0].images }))
        dispatch(formActions.setString({ key: "description", value: fetchState?.singlePost?.post[0].description }))

    },[dispatch,fetchState])
    return (
        <>

            <section className="mx-auto max-w-7xl mt-2 px-8 ">
                <h1 className="font-semibold text-2xl ">Post your Home Rent </h1>

                <form action="" className='flex flex-col gap-7 mt-7' onSubmit={updateHandler}>
                    {/* <div className='flex flex-col gap-4'>

                        <h3 className='font-semibold'> user_id <span className='text-red-700 text-lg'>*</span></h3>
                        <input className={`w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 ${formData.errorState.errors.address ? "border-red-700 focus:border-red-900" : null}`} type="text" name="map" id="" placeholder='Enter your full address ' value={formData.userid} onChange={handleid} />
                        
                    </div> */}
                    <div className='flex flex-col gap-4'>


                        <label className={`hover:cursor-pointer p-10 flex border-2 border-dashed rounded-3xl border-green-400 gap-5 justify-center items-center font-semibold text-2xl ${formData.errorState.errors.image ? "border-red-700 focus:border-red-900 text-red-700" : null}`} htmlFor="house"><FontAwesomeIcon className={`text-green-700 ${formData.errorState.errors.image ? " text-red-700" : null}`} icon={faUpload} size="2xl" />Upload Your Images Here  <span className='text-red-700 text-lg'>*</span> </label>
                        <p className='pl-8 error text-lg text-red-700'>{formData.errorState.errors.image}</p>
                        <FileBase64
                            className="bg-blue-700"
                            type="file"
                            multiple={true}
                            onDone={(e) => {


                                for (let i in e) {
                                    dispatch(formActions.pushing({ key: "images", data: e[i].base64 }))
                                }
                            }} />
                        <div className='grid grid-cols-8 gap-3' >
                            {imageElement}


                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <h3 className='font-semibold'>Room Details  <span className='text-red-700 text-lg'>*</span></h3>
                        <div className='grid grid-cols-2 gap-6'>

                            <div className='flex flex-col gap-3' >

                                <input className={` p-4 pl-8 w-full rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 ${formData.errorState.errors.bed ? "border-red-700 focus:border-red-900" : null} `} type="number" name="Bed" id="" placeholder='Bedroom' value={formData.bed} onChange={handleBed} />
                                <p className='pl-8 error text-xs text-red-700'>{formData.errorState.errors.bed}</p>
                            </div>
                            <div className='flex flex-col gap-3'>

                                <input className={` p-4 pl-8 w-full rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 ${formData.errorState.errors.bath ? "border-red-700 focus:border-red-900" : null} `} type="number" name="Bath" id="" placeholder='Bathroom' value={formData.bath} onChange={handleBath} />
                                <p className='pl-8 error text-xs text-red-700'>{formData.errorState.errors.bath}</p>
                            </div>
                            <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700' type="number" name="Bath" id="" placeholder='Balcony' value={formData.balcony} onChange={handleBalcony} />
                            <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700' type="number" name="Bath" id="" placeholder='Floor Size(sqft)' value={formData.floorSize} onChange={handlefloor} />
                        </div>
                    </div>
                    <textarea type="text" className='resize-none p-4 pl-8 rounded-3xl border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 h-40' name="" id="" placeholder='description' value={formData.description} onChange={handleDescription} />
                    <div className='grid grid-cols-2 gap-6 max-[700px]:grid-cols-1'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-semibold'>Facilities</h3>
                            <input placeholder='in ex. 24/7 water , Natural Gas ,Constant Electricity' type="text" className='w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700' name="Facility" id="" />
                        </div>
                        <div>
                            <h3 className='font-medium'>Added Facilities</h3>
                            <ol type='1' className='list-decimal p-5'>
                                <li>None</li>
                                <li>24/7 gas</li>
                            </ol>
                        </div>
                    </div>
                    <AreaSelect/>
                    <div className='flex flex-col gap-4'>

                        <h3 className='font-semibold'> Full Address <span className='text-red-700 text-lg'>*</span></h3>
                        <input className={`w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 ${formData.errorState.errors.address ? "border-red-700 focus:border-red-900" : null}`} type="text" name="map" id="" placeholder='Enter your full address ' value={formData.address} onChange={handleAddress} />
                        <p className='pl-8 error text-xs text-red-700'>{formData.errorState.errors.address}</p>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <h3 className='font-semibold'>Map location</h3>
                        <input className='w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700' type="text" name="map" id="" placeholder='Google map embeding src' value={formData.mapSrc} onChange={handleMap} />
                        <p className='pl-8 error text-xs text-red-700'>{ }</p>
                    </div>
                    <div className='grid grid-cols-2 gap-6 max-[700px]:grid-cols-1'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-semibold'> Rent <span className='text-red-700 text-lg'>*</span></h3>
                            <input type="number" className={`w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 ${formData.errorState.errors.rent ? "border-red-700 focus:border-red-900" : null} `} name="rent" id="" placeholder='Rent Amount (in taka)' value={formData.rent} onChange={handleRent} />
                            <p className='pl-8 error text-xs text-red-700'>{formData.errorState.errors.rent}</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-semibold'>Additional Charges</h3>
                            <div className='flex gap-4'>

                                <input placeholder='Charge Category (Gas ,Water etc.)' className='w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700' type="text" name="Chargename" id="" value={formData.chargeCategory} onChange={handleCategory} />
                                <input placeholder='Charge Amount' className='w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700' type="number" name="charg" id="" value={formData.charge} onChange={handleCharge} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        <h3 className='font-semibold'>Available From <span className='text-red-700 text-lg'>*</span></h3>
                        <input className={`w-full p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 ${formData.errorState.errors.rentDate ? "border-red-700 focus:border-red-900" : null} `} type="date" name="map" id="" placeholder='Enter Date' value={formData.rentDate} onChange={handleDate} />
                        <p className='pl-8 error text-xs text-red-700'>{formData.errorState.errors.rentDate}</p>
                    </div>


                    <div className='flex justify-center'>

                        <button type='submit' className='btn btn-md  bg-green-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-green-600 text-base' >Submit <FontAwesomeIcon icon={faPaperPlane} /> </button>
                    </div>

                </form>
                <Toaster richColors position="top-right" />
            </section>
        </>
    )
}