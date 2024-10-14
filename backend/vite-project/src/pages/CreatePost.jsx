import FileBase64 from 'react-file-base64';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBottleDroplet, faCalculator, faCheck, faElevator, faFire, faGasPump, faLocationDot, faPaperPlane, faPersonDress, faPersonMilitaryPointing, faTty, faUpload, faUser, faUsers, faVenus, faVideo, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from 'sonner';
import { Checkbox, CircularProgress, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Textarea } from '@mui/joy';
import Autocomplete from "@mui/material/Autocomplete"
import { useUploadPostMutation } from '../../redux/slice/apiSlice.js';
import { img,  place } from '../assets/assets.js';

export function CreatePost() {





    const textFiledSettings = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'green', // Default border color
            },
            '&:hover fieldset': {
                borderColor: 'green', // Border color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green', // Border color when focused
            },
        },
    }


    const [uploadPost, { data, isError, isLoading, isSuccess }] = useUploadPostMutation()

    const [images, setImages] = useState([])
    const [bed, setBed] = useState(1)
    const [bath, setBath] = useState(1)
    const [balcony, setBalcony] = useState(null)
    const [living, setLiving] = useState(false)
    const [dining, setDining] = useState(false)
    const [floorSize, setFloorSize] = useState(null)
    const [description, setDescription] = useState(null)
    const [area, setArea] = useState("")
    const [address, setAddress] = useState(null)
    const [rent, setRent] = useState(null)
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [advance, setAdvance] = useState(null)
    const [utilityBills, setUtilityBills] = useState(null)
    const [rentDate, setRentDate] = useState(null)
    const [type, setType] = useState("Any")
    const [fbLink, setFblink] = useState(null)
    const [loading, setLoading] = useState(false)
    const [mapError, setMapError] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [locationText, setLocationText] = useState("Click to register your address")
    const [submitError, setSubmitError] = useState("")
    const [tried, setTried] = useState(false)
    const [amenities, setAmenities] = useState({
        gas: "",
        electricity: "",
        elevator: false,
        wifi: false,
        security: false,
        parking: false
    })


    function resizeBase64Image(base64, width, quality = 1, callback) {
        // Create an Image object

        let img = new Image();

        // Set the source to the base64 string
        img.src = base64;

        // Once the image is loaded
        img.onload = () => {
            // Create a canvas element
            let canvas = document.createElement('canvas');
            const w = img.width
            const h = img.height
            const ratio = h / w
            // Set the canvas dimensions to the desired size
            canvas.width = width;
            canvas.height = ratio * width;

            // Get the canvas context to draw on
            let ctx = canvas.getContext('2d');

            // Draw the resized image on the canvas
            ctx.drawImage(img, 0, 0, width, ratio * width);

            // Check the image type from base64
            const format = base64.match(/^data:(image\/[a-zA-Z]+);base64,/)[1];

            // Get the resized image as base64 with quality (if it's a lossy format like JPEG)
            let resizedBase64 = canvas.toDataURL(format, quality);

            // Call the callback function with the resized base64 string
            callback(resizedBase64);
        };

        // Handle loading errors
        img.onerror = (err) => {
            console.error("Failed to load image", err);
        };
    }

    const mapLocation = (e) => {
        if (disabled) {
            document.getElementById('my_modal_x').showModal()
        }
        navigator.geolocation.getCurrentPosition((coords) => {

            setLoading(true)
            setLocationText(null)



            setLat(coords.coords.latitude)
            setLong(coords.coords.longitude)

            setLoading(false)
            setLocationText("Map  Registered ! Click to Preview")

            setMapError(null)
            setDisabled(true)

        }, (err) => {

            if (!lat && !long) {
                setLocationText("Failed! Try again")
                setMapError("Please Enable location accesss in browser settings !!")
            }

        }, {
            enableHighAccuracy: true
        })
    }

    const errors = {
        images: " Please Upload at least 2(Two) rooms image",
        bed: "Please provide bathroom count",
        bath: "Please provide bathroom count",
        amenities: "Please select amenities",
        area: "Please select Area",
        address: "Please provide Address",
        rent: "Please provide Rent Amount",
        rentDate: "Please provide renting date",
        map: "Please give Location permission to capture house map location",
        utilityBills: "Please provide utility bill amount",
        advance: "Please provide advance amount",
        type: "Please select property type"

    }




    function deleteImage(e) {
        // console.log(e.target.id)
        const dataTransfer = new DataTransfer();
        const byteArray = new Uint8Array([0x41]);  // 0x41 is the hex value for 'A'

        // Create a Blob from the byteArray
        const blob = new Blob([byteArray], { type: 'text/plain' });

        // Create a file from the Blob
        const file = new File([blob], '1bytefile.txt', { type: 'text/plain' });
        dataTransfer.items.add(file);
        document.getElementsByTagName("input")[0].files = dataTransfer.files

        const i = parseInt(e.target.id)

        setImages([...images.slice(0, i), ...images.slice(i + 1)])

    }

    let imageElement = images.map((e, i) => {
        return <div className='w-24 h-24 relative max-[750px]:w-16 max-[750px]:h-16'>
            <img src={img.cross} id={i} alt="" className='right-1 top-1 absolute w-8 bg-red-500 rounded-full max-[750px]:w-5' onClick={deleteImage} />
            <dialog id={`my_modal_${i}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Image Preview</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action flex  flex-col justify-center items-center gap-4">
                        <img className=' w-1/2   rounded-xl' src={e} alt="" />
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog> <img onClick={() => document.getElementById(`my_modal_${i}`).showModal()} className="w-full hover:cursor-pointer h-full rounded-xl object-cover after:content-['fajdflkajdflkadjf'] after:ml-0.5 after:text-red-500" i src={e} alt="" /> </div>
    })

    useEffect(() => {
        const input = document.querySelector("input[type='file']")
        input.accept = "image/*"
        input.id = "house"

        console.log(images)

    }, [images])


    function handleSubmit(e) {
        e.preventDefault()

        if (isSuccess) {
            toast.success("Your post already has been uploaded")
            return
        }

        else if (images.length < 2 || !bed || !bath || amenities < 2 || !area || !address || !rent || !advance || !rentDate) {
            setTried(true)
            toast.error("Please fillup all required data !")
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } else {

            uploadPost({
                images,
                bed,
                bath,
                balcony,
                living,
                dining,
                floorSize,
                description,
                amenities,
                area,
                address,
                rent,
                lat,
                long,
                advance,
                utilityBills,
                rentDate,
                type,
                fbLink
            })
        }
    }

    if (isSuccess) {

        toast.success("Post Uploaded Successfully !!")
        console.log(isSuccess)

    }
    if (isError) {
        toast.error("Failed ! Please try again with correct information !")
    }


    return (
        <>

            <section className="mx-auto max-w-7xl mt-2 px-8 ">
                <h1 className="font-semibold text-2xl ">Post your Home Rent </h1>




                <form onSubmit={handleSubmit} className='flex flex-col gap-7 mt-7' >



                    {/* -------------------------------------------------------------------------------image input ------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className='flex flex-col gap-4'>


                        <label className={`hover:cursor-pointer p-10 flex border-2 border-dashed rounded-3xl border-green-400 gap-5 justify-center items-center font-semibold text-2xl ${images.length < 2 && tried ? "border-red-700" : null} `} htmlFor="house"><FontAwesomeIcon className={`${images.length < 2 && tried ? "text-red-700" : "text-green-600"}`} icon={faUpload} size="2xl" />Upload Your Images Here  <span className='text-red-700 text-lg'>*</span> </label>
                        <p className='pl-8 text-red-700'>{(images.length < 2 && tried) ? errors.images : null}</p>
                        <FileBase64
                            className="bg-blue-700"
                            type="file"
                            multiple={true}
                            onDone={async (e) => {
                                e.forEach((file) => {

                                    resizeBase64Image(file.base64, 1200, 0.8, (resizedBase64) => {
                                        setImages((prevImages) => [...prevImages, resizedBase64])
                                    });
                                }

                                )

                            }}
                        />




                    </div>
                    <div className='flex gap-3 flex-wrap'>
                        {
                            imageElement
                        }
                    </div>





                    {/*------------------------------------------- bed bath balcony floorsize ------------------------------------------------------------------------- */}
                    <div className='flex gap-10 items-center max-[1024px]:flex-col'>




                        <div className='flex gap-10 items-center max-[750px]:flex-wrap'>


                            {/* bed ---------------------------------------------------------- */}
                            <div className={`flex flex-col gap-3 border-r-2 pr-8 border-green-600 ${(!bed && tried) ? "text-red-700" : null}`}>
                                <h3>Bedroom <sup className='text-red-700'>*</sup></h3>
                                <div className='flex gap-3 items-center'>

                                    <div onClick={() => bed - 1 < 0 ? setBed(null) : setBed(v => v - 1)} className='btn btn-sm bg-green-500 text-xl'>-</div>
                                    <div className='w-12 h-10 border border-green-400 rounded-xl p-2 text-center'>{bed}</div>
                                    <div onClick={() => { if (bed + 1 < 11) setBed(v => v + 1) }} className='btn btn-sm bg-green-500 text-xl '>+</div>
                                </div>
                                <p className='text-red-700 text-xs'>{(!bed && tried) ? errors.bed : null}</p>
                            </div>





                            {/* bath -------------------------------------------------------------------- */}
                            <div className={`flex flex-col gap-3 border-r-2 pr-8 border-green-600 ${(!bath && tried) ? "text-red-700" : null}`}>
                                <h3>Bathroom <sup className='text-red-700'>*</sup></h3>
                                <div className='flex gap-3 items-center'>

                                    <div onClick={() => bath - 1 < 0 ? setBath(null) : setBath(v => v - 1)} className='btn btn-sm bg-green-500 text-xl'>-</div>
                                    <div className='w-12 h-10 border border-green-400 rounded-xl p-2 text-center'>{bath}</div>
                                    <div onClick={() => { if (bath + 1 < 11) setBath(v => v + 1) }} className='btn btn-sm bg-green-500 text-xl '>+</div>
                                </div>
                                <p className='text-red-700 text-xs'>{(!bath && tried) ? "Please provide bedroom count" : null}</p>
                            </div>


                            {/* balcony ------------------------------------------------------------------------------------ */}




                            <div className='flex flex-col gap-3 border-r-2 pr-8 border-green-600 '>
                                <h3>Balcony</h3>
                                <div className='flex gap-3 items-center'>

                                    <div onClick={() => balcony - 1 < 0 ? setBalcony(null) : setBalcony(v => v - 1)} className='btn btn-sm bg-green-500 text-xl'>-</div>
                                    <div className='w-12 h-10 border border-green-400 rounded-xl p-2 text-center'>{balcony}</div>
                                    <div onClick={() => { if (balcony + 1 < 11) setBalcony(v => v + 1) }} className='btn btn-sm bg-green-500 text-xl '>+</div>
                                </div>
                            </div>

                        </div>

                        <div className='flex gap-10 items-center'>

                            {/* floor size ---------------------------------------------------------------------------------------------------- */}

                            <TextField type='number' value={floorSize} onChange={(e) => { setFloorSize(e.target.value) }} helperText="" className='flex-1' color='success' id="outlined-basic" label="Estimated Floor Size (sqft)" variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />



                            {/*------------------------------- living / dining -------------------------------------------------------------------------------------------------------- */}
                            <div className='flex flex-col gap-2'>
                                <h1><FontAwesomeIcon icon={faCheck} style={{ color: "#38b536", }} /> Check if exists</h1>
                                <FormControlLabel control={<Checkbox color='success' checked={living} onChange={() => setLiving(v => !v)} />} label="Drawing / Living Room" />
                                <FormControlLabel control={<Checkbox color='success' checked={dining} onChange={() => setDining(v => !v)} />} label="Dining Room" />
                            </div>
                        </div>

                    </div>





                    <div className='flex gap-4 max-[1024px]:flex-col'>
                        {/* area ----------------------------------------------------------------------------------------------------- */}
                        <div className='flex gap-4 max-[750px]:flex-col'>


                            <div className='flex flex-col'>

                                <Autocomplete
                                    value={area}
                                    options={place}
                                    onChange={(e, v) => setArea(v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Area" />}
                                />
                                <p className='pl-3 error  text-red-700'>{(!area && tried) ? errors.area : null}</p>
                            </div>
                            <div className='h-14 flex relative'>

                                {/*Google map location ------------------------------------------------------------------------------------- */}
                                <LoadingButton

                                    onClick={mapLocation}

                                    loading={loading}
                                    loadingPosition="start"
                                    startIcon={<><FontAwesomeIcon icon={faLocationDot} size='xl' /> </>}
                                    endIcon={null}
                                    loadingIndicator={<div className='flex items-center gap-4'><CircularProgress color="success" size={"30px"} /> <p>Getting your address...</p></div>}
                                    variant="contained"
                                    sx={{ height: "full", minWidth: 350, backgroundColor: disabled ? 'success.light' : 'success.main' }}
                                >

                                    {locationText}
                                    <dialog id="my_modal_x" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <h3 className="font-bold text-lg text-black">Your address</h3>
                                            <p className="py-4">Click the button below to close</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </LoadingButton>

                                <p className='text-xs text-red-700 absolute -bottom-5 left-3'>{mapError}</p>

                            </div>
                        </div>



                        {/* -------------------------------address------------------------------------------------------------------------------------------------------------- */}


                        <TextField error={(!address && tried)} helperText={(!address && tried) ? errors.address : null} className='flex-1' color='success' id="outlined-basic" value={address} onChange={(e) => {
                            setAddress((v) => e.target.value)

                        }} label={<div className='flex'> <p>Address <span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />
                    </div>

                    {/*-------------------------------------------------- amenities ------------------------------------------------------------------------*/}

                    <div className='flex flex-col  pl-5 gap-5 '>

                        <h3 className={`-translate-x-5 text-left font-medium`}>Select Amenities  <sup className='text-red-700'>*</sup> <span className='text-slate-500 text-xs'>(Click to select)</span></h3>
                        {/* -------- gas type --------------- */}
                        <div className='flex flex-col gap-3 flex-wrap border-b-2 pb-2'>
                            <h4 className='font-medium'>Gas Type :</h4>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.gas == "meter"} onChange={() => setAmenities({ ...amenities, gas: "meter" })} />} label="Prepaid Meter Gas" />
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.gas == "lpg"} onChange={() => setAmenities({ ...amenities, gas: "lpg" })} />} label="LPG Cylinder Gas" />
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.gas == "natural"} onChange={() => setAmenities({ ...amenities, gas: "natural" })} />} label="Natural Gas" />
                            </div>
                        </div>

                        {/* ---------------- electricity type -------------------------------- */}

                        <div className='flex flex-col flex-wrap border-b-2  pb-2'>
                            <h4 className='font-medium'>Electricity Type :</h4>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.electricity == "prepaid"} onChange={() => setAmenities({ ...amenities, electricity: "prepaid" })} />} label="Prepaid Meter Electricity" />
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.electricity == "postpaid"} onChange={() => setAmenities({ ...amenities, electricity: "postpaid" })} />} label="Postpaid Meter Electricity" />
                            </div>
                        </div>


                        {/* ----------------- other amenities ------------------------------- */}
                        <div className='flex flex-col gap-3 flex-wrap border-b-2  pb-2'>
                            <h4 className='font-medium'>Others :</h4>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.elevator} onChange={() => setAmenities({ ...amenities, elevator: !amenities.elevator })} />} label="Elevator" />
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.wifi} onChange={() => setAmenities({ ...amenities, wifi: !amenities.wifi })} />} label="Wi-Fi" />
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.security} onChange={() => setAmenities({ ...amenities, security: !amenities.security })} />} label="Security Guard" />
                                <FormControlLabel control={<Checkbox color='success' checked={amenities.parking} onChange={() => setAmenities({ ...amenities, parking: !amenities.parking })} />} label="Parking Area" />
                            </div>
                        </div>
                        <p className='text-xs pl-12 text-red-700'>{(amenities.length < 2 && tried) ? "PLease select at least gas and electricity type !" : null}</p>
                    </div>






                    {/* rents  */}

                    <div className='grid grid-cols-5 gap-4 max-[1024px]:grid-cols-3 max-[750px]:grid-cols-2'>


                        {/* ----------------------------rent--------------------------------------------------------------- */}

                        <TextField error={(!rent && tried)} type='number' helperText={(!rent && tried) ? errors.rent : null} className='flex-1' color='success' id="outlined-basic" value={rent} onChange={(e) => {
                            if (e.target.value - 1 > -1) {
                                setRent((v) => e.target.value)
                            } else {
                                setRent(null)
                            }

                        }} label={<div className='flex'> <p>Rent <span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />



                        {/* --------------------------advance---------------------------------------------------------- */}

                        <div className='relative'>

                            <TextField focused={rent} type='number' error={(!advance && tried)} helperText={(!advance && tried) ? "Please provide Advance Amount" : null} className='flex-1' color='success' id="outlined-basic" value={advance} onChange={(e) => {
                                if (e.target.value - 1 > -1) {
                                    setAdvance((v) => e.target.value)
                                } else {
                                    setAdvance(null)
                                }

                            }} label={<div className='flex '> <p>Advance <span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green", } }} sx={{ ...textFiledSettings, width: 1 }} />
                            <div className='bg-green-500 absolute text-xs p-2 rounded-md top-3 right-3 font-bold hover:cursor-pointer max-[750px]:text-[8px]' onClick={() => setAdvance(rent)}>Same as Rent</div>
                        </div>

                        {/* -------------------------------utility Bills------------------------------------------------------------- */}

                        <TextField type='number' className='flex-1' color='success' id="outlined-basic" value={utilityBills} onChange={(e) => {
                            if (e.target.value > -1) {
                                setUtilityBills((v) => e.target.value)
                            } else {
                                setUtilityBills(null)
                            }

                        }} label={<div className='flex'> <p>Utility Bills (gas,electricity,security)<span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />



                        {/* ---------------- Property type --------------------------------------------------------- */}

                        <FormControl sx={{ ...textFiledSettings }} InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} error={!(area + 1)} >
                            <InputLabel id="demo-simple-select-label" >Property Type <sup className='text-red-700'>*</sup></InputLabel>
                            <Select
                                InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                error={type == null}

                                value={type}
                                label="Property Type"
                                onChange={(e) => {
                                    setType((v) => e.target.value)
                                }}
                            >
                                <MenuItem value="Family" className='flex gap-3'> <FontAwesomeIcon icon={faUsers} />  Family</MenuItem>
                                <MenuItem className='flex gap-3' value="Bachelor"> <FontAwesomeIcon icon={faUser} />  Bachelor</MenuItem>
                                <MenuItem className='flex gap-3' value="Sublet"> <FontAwesomeIcon icon={faUser} />  Sublet</MenuItem>
                                <MenuItem className='flex gap-3' value="SubletF"> <FontAwesomeIcon icon={faPersonDress} />  <FontAwesomeIcon icon={faVenus} />  Sublet(Female)</MenuItem>
                                <MenuItem className='flex gap-3' value="Any">Any</MenuItem>
                            </Select>
                            <p className='text-xs text-red-700 pl-3'>{(!type && tried) ? errors.type : null}</p>
                        </FormControl>



                        {/* ------------------------ Date picker ------------------------------------------------------------------- */}

                        <div className='flex flex-col'>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DatePicker
                                    error={true}
                                    label={<div className='flex'> <p>Rent Date <span className='text-red-700'>*</span></p></div>}
                                    onChange={(e) => {
                                        setRentDate(e.$d)

                                    }}
                                    sx={textFiledSettings}

                                />
                                <p className='text-xs text-red-700 pl-3'>{(!rentDate && tried) ? "Please provide renting date" : null}</p>
                            </LocalizationProvider>
                        </div>
                    </div>


                    {/* ---------------------------------- description -------------------------------------------------------------- */}
                    <Textarea
                        value={description}
                        sx={{
                            // Default border color
                            '--Textarea-focusedHighlight': 'green',
                            borderColor: 'green', // Green border when focused
                            '&:hover': {
                                borderColor: 'green', // Optional: Green border on hover too
                            },
                            '&:focus': {
                                borderInlineColor: 'green', // Optional: Green border on hover too
                            },
                        }}
                        onChange={(e) => setDescription(e.target.value)}
                        variant='outlined'
                        placeholder='Description ...'
                        minRows={6}
                    />

                    {/* ------------------------------------------- fb post link ------------------------------------------------------------ */}
                    <TextField helperText="If you posted this rent on facebook Paste your post link ..." className='flex-1' color='success' id="outlined-basic" value={fbLink} onChange={(e) => {

                        setFblink((v) => e.target.value)

                    }} label={<div className='flex'>Fb Post Link</div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />


                    {/* -------------------------------------submit------------------------------------------------- */}

                    <div className='flex justify-center flex-col'>
                        <div className='flex justify-center'>

                            <button disabled={isLoading} type='submit' className='btn btn-md  bg-green-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-green-600 text-base' >Submit {isLoading ? <span className="loading loading-spinner text-success"></span> : <FontAwesomeIcon icon={faPaperPlane} />}</button>
                        </div>
                        <p className='text-red-600 text-center'>{submitError}</p>
                    </div>

                </form>
                <Toaster richColors closeButton position="bottom-right" />
            </section>
        </>
    )
}


