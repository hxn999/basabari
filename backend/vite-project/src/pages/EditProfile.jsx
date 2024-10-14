import { faMars, faPenToSquare, faPlug, faPlus, faRightToBracket, faUpload, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64';
import Autocomplete from "@mui/material/Autocomplete"
import { Checkbox, CircularProgress, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { img, place } from '../assets/assets.js'
import { useEditProfileMutation, useProfileQuery } from '../../redux/slice/apiSlice.js'
import { Toaster, toast } from 'sonner'
import { Skeleton } from '../components/ui/Skeleton.jsx'
import { Error } from '../components/ui/Error.jsx'
import { imageUrlToBase64 } from '../components/utils/imageToBase64.js'



export function EditProfile() {


    // Usage example


    // console.log(bs)


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



    const { data: profile, error: pfpError, isSuccess: isPfpSuccess, isError: isPfpError, isLoading: isPfpLoading } = useProfileQuery()

    const [editProfile, { data, error, isError, isLoading, isSuccess }] = useEditProfileMutation()


    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [rePassword, setRepassword] = useState(null)
    const [address, setAddress] = useState(null)
    const [area, setArea] = useState(null)
    const [phone, setPhone] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [pfp, setPfp] = useState(null)
    const [evidence, setEvidence] = useState([])
    const [gender, setGender] = useState(null)
    const [fbLink, setFblink] = useState(null)
    const [tried, setTried] = useState(false)





    const errors = {
        email: "Please provide your Email Address",
        address: "Please provide your address",
        phone: "Please provide your Mobile Number",
        firstName: "Please provide your First Name",
        lastName: "Please provide your Last Name",
        gender: "Please select your Gender",
        area: "Please select your Area",
    }




    function resizeBase64Image(base64, width, quality, callback) {
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



    useEffect(() => {
        const input = document.getElementsByTagName("input")[0]
        input.accept = "image/*"
        input.id = "house"
        document.getElementsByTagName("input")[7].accept = "image/*"
        document.getElementsByTagName("input")[7].id = "house2"


    }, [])
    useEffect(() => {
        console.log(profile)
        setFirstName(profile?.name.split(" ")[0])
        setLastName(profile?.name.split(" ")[1])
        setAddress(profile?.address)
        setArea(profile?.area)
        setEmail(profile?.email)
        setPhone(profile?.phone)
        setGender(profile?.gender)
        setFblink(profile?.fbLink)
        imageUrlToBase64(`http://localhost:3000${profile?.pfpSrc}`)
            .then(base64String => { setPfp(base64String) })
            .catch(error => console.log("-----------------------------------------------"));
        profile?.evidence.map((doc)=>{

            imageUrlToBase64(`http://localhost:3000${doc}`)
                .then(base64String => { setEvidence((prev)=>[...prev,base64String]) })
                .catch(error => console.log("-----------------------------------------------"));
        })


    }, [isPfpSuccess])



    let image = <div className='w-60 relative max-[750px]:w-32 max-[750px]:h-32'>
        <img src={img.cross} alt="" className='right-1 top-1 absolute w-10 bg-red-500 rounded-full max-[750px]:w-5' onClick={() => {
            const dataTransfer = new DataTransfer();
            const byteArray = new Uint8Array([0x41]);  // 0x41 is the hex value for 'A'

            // Create a Blob from the byteArray
            const blob = new Blob([byteArray], { type: 'text/plain' });

            // Create a file from the Blob
            const file = new File([blob], '1bytefile.txt', { type: 'text/plain' });
            dataTransfer.items.add(file);
            document.getElementsByTagName("input")[0].files = dataTransfer.files
            setPfp(null)
        }} />
        <img className="w-full hover:cursor-pointer h-full rounded-xl object-cover " src={pfp} alt="" />
    </div>

    function deleteImage(e) {
        // console.log(e.target.id)
        const dataTransfer = new DataTransfer();
        const byteArray = new Uint8Array([0x41]);  // 0x41 is the hex value for 'A'

        // Create a Blob from the byteArray
        const blob = new Blob([byteArray], { type: 'text/plain' });

        // Create a file from the Blob
        const file = new File([blob], '1bytefile.txt', { type: 'text/plain' });
        dataTransfer.items.add(file);
        document.getElementsByTagName("input")[7].files = dataTransfer.files

        const i = parseInt(e.target.id)

        setEvidence([...evidence.slice(0, i), ...evidence.slice(i + 1)])

    }

    let evidenceImage = evidence.map((e, i) => {
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
    let user = localStorage.getItem('user')
    let userObj = JSON.parse(user)

    function submitHandler(e) {
        e.preventDefault()
        if (isSuccess) {
            localStorage.setItem('user',data.userInfo)
            toast.success("Account Already Updated !")
            return
        }
        else if (!email || !address || !phone || !area || !gender || !firstName || !lastName) {
            setTried(true)
            toast.error("Please fillup all required data !")
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        else {
            console.log("editing-------------------------------------------------")
            // createUser(
            //     {
            //         email,
            //         password,
            //         firstName,
            //         lastName,
            //         address,
            //         area,
            //         phone,
            //         evidence,
            //         pfp,
            //         gender,
            //         fbLink
            //     }
            // )
            editProfile({
                userId: userObj.userId,
                data: {
                    email,
                    name:firstName.trim()+" "+lastName.trim(),
                    address,
                    area,
                    phone,
                    evidence,
                    pfp,
                    gender,
                    fbLink
                }
            })
        }
        // console.log({

        //     email,
        //     password,
        //     firstName,
        //     lastName,
        //     address,
        //     area,
        //     phone,
        //     evidence,
        //     pfp,
        //     gender,
        //     fbLink,


        // })



    }

    if (isSuccess) {
        toast.success("Your profile updated Successfully !!")
        localStorage.setItem('user', JSON.stringify(data.userInfo))
        // window.location.replace('http://localhost:5173/');
    }
    if (isError) {
        toast.error(error.data.err)
    }

    if (isPfpSuccess) {

    }
    let loading = <div className='flex w-full mt-7  flex-col gap-5'>
        <Skeleton h={"h-10"} w={"w-full"} />
        <Skeleton h={"h-10"} w={"w-full"} />
        <Skeleton h={"h-10"} w={"w-full"} />
        <Skeleton h={"h-10"} w={"w-full"} />
        <Skeleton h={"h-10"} w={"w-full"} />
    </div>



    return (
        <div className='flex-1'>
            <section className='mx-auto max-w-7xl  px-8 my-8 flex flex-col items-center gap-4'>
                <h1 className='text-center text-3xl font-bold'> Edit Your Profile</h1>
                {isPfpLoading ? loading : null}
                {isPfpError ? <Error text={'Profile Data Not Found !'} /> : null}
                <form action="" className={`${!isPfpLoading && !isPfpError ? "flex" : "hidden"} flex-col gap-7 mt-7 justify-center items-center w-full `} onSubmit={submitHandler}>


                    <div className='flex justify-around  gap-4 w-full'>
                        {/* ----------------------------- profile picture ----------------------------------------------------------- */}
                        <label className={`hover:cursor-pointer p-8 flex border-2 border-dashed rounded-3xl border-green-400 gap-5 justify-center items-center font-semibold text-xl max-[700px]:text-base w-2/5 `} htmlFor="house"><FontAwesomeIcon className={`text-green-700 `} icon={faUpload} size="xl" />Upload Your Profile Picture Here  <span className='text-red-700 text-lg'>*</span> </label>

                        <FileBase64
                            className="bg-blue-700"
                            type="file"
                            multiple={false}
                            onDone={(e) => {

                                resizeBase64Image(e.base64, 1200, 0.8, (resizedBase64) => {
                                    setPfp(resizedBase64)
                                });

                            }} />
                        <div  >
                            {pfp ? image : null}
                        </div>
                    </div>




                    <div className='grid grid-cols-2 gap-4 w-full'>


                        {/* ---------------------------- First name -------------------------------------------------------- */}
                        <TextField error={(!firstName && tried)} helperText={(!firstName && tried) ? errors.firstName : null} color='success' id="outlined-basic" value={firstName} onChange={(e) => {
                            setFirstName((v) => e.target.value)

                        }}
                            label={<div className='flex'> <p>First Name <span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />

                        {/* ---------------------------- Last name -------------------------------------------------------- */}
                        <TextField error={(!lastName && tried)} helperText={(!lastName && tried) ? errors.lastName : null} color='success' id="outlined-basic" value={lastName} onChange={(e) => {
                            setLastName((v) => e.target.value)

                        }}
                            label={<div className='flex'> <p>LastName Name <span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />



                    </div>



                    <div className='w-full flex flex-col gap-1'>

                        {/* --------------------------------address----------------------------------------------------------------------------- */}

                        <TextField error={(!address && tried)} helperText={(!address && tried) ? errors.address : null} className='flex-1' color='success' id="outlined-basic" value={address} onChange={(e) => {
                            setAddress((v) => e.target.value)

                        }}
                            label={<div className='flex'> <p>Address <span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />

                    </div>
                    <div className='  w-full'>

                        {/* ------------------------------- area select ---------------------------------------------- */}

                        <Autocomplete
                            value={area}
                            options={place}
                            onChange={(e, v) => setArea(v)}
                            sx={{ width: 1 }}
                            renderInput={(params) => <TextField {...params} label="Area" />}
                        />
                        <p className='pl-3 error  text-red-700'>{(!area && tried) ? errors.area : null}</p>
                    </div>

                    <div className='w-full flex flex-col gap-1'>

                        {/* ------------------------------- email ---------------------------------------------- */}

                        <TextField error={(!email && tried)} helperText={(!email && tried) ? errors.email : null} className='flex-1' color='success' id="outlined-basic" value={email} onChange={(e) => {
                            setEmail((v) => e.target.value)

                        }}
                            label={<div className='flex'> <p>Email <span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />

                    </div>



                    <div className='w-full flex flex-col gap-1'>

                        {/* ---------------------- Phone number ------------------------------------- */}
                        <TextField error={(!phone && tried)} helperText={(!phone && tried) ? errors.phone : null} className='flex-1' color='success' id="outlined-basic" value={phone} onChange={(e) => {
                            setPhone((v) => e.target.value)

                        }}
                            label={<div className='flex'> <p>Mobile Number <span className='text-red-700'>*</span></p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />


                    </div>

                    <div className='flex flex-col gap-4'>

                        {/* ------------------------------- document evidence --------------------------------------- */}
                        <label className={`flex-col hover:cursor-pointer p-10 flex border-2 border-dashed rounded-3xl border-green-400 gap-5 justify-center items-center font-semibold text-2xl `} htmlFor="house2"><FontAwesomeIcon className={``} icon={faUpload} size="2xl" /> Upload Your Documents Here
                            <p className='text-xs'> (i.e. Your house Electricity Bills, Gas Bills , Rent Permission Paper ) </p>
                            <p className='text-xs'> (Will be used to verify Account) </p>
                        </label>

                        <FileBase64
                            className="bg-blue-700"
                            type="file"
                            multiple={true}
                            onDone={async (e) => {
                                e.forEach((file) => {

                                    resizeBase64Image(file.base64, 1200, 0.8, (resizedBase64) => {
                                        setEvidence((prevImages) => [...prevImages, resizedBase64])
                                    });
                                }

                                )

                            }}
                        />




                    </div>
                    <div className='flex gap-3 flex-wrap'>
                        {
                            evidenceImage
                        }
                    </div>
                    <div className='flex w-full gap-3'>
                        {/* -------------------------- gender ------------------------------------- */}
                        <div>


                            <FormControl focused={gender} sx={{ ...textFiledSettings, width: 130 }} InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} error={(!gender && tried)} >
                                <InputLabel id="demo-simple-select-label" >Gender <sup className='text-red-700'>*</sup></InputLabel>
                                <Select

                                    InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    error={(!gender && tried)}

                                    value={gender}
                                    label="Gender"
                                    onChange={(e) => {
                                        setGender((v) => e.target.value)
                                    }}
                                >
                                    <MenuItem value="male" className='flex gap-3'> <FontAwesomeIcon icon={faMars} />  Male</MenuItem>
                                    <MenuItem className='flex gap-3' value="female"> <FontAwesomeIcon icon={faVenus} />  Female</MenuItem>

                                </Select>
                                <p className='text-xs text-red-700 pl-3'>{(!gender && tried) ? errors.gender : null}</p>
                            </FormControl>
                        </div>
                        {/* -----------------------------fblink------------------------------------ */}
                        <TextField error={false} helperText={`Provide Facebook Profile Link`} className='flex-1' color='success' id="outlined-basic" value={fbLink} onChange={(e) => {
                            setFblink((v) => e.target.value)

                        }}
                            label="Facebook Profile Link" variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />
                    </div>


                    <div className='w-full flex flex-col gap-8'>

                    </div>
                    <div className='flex'>

                        <button type='submit' className="btn w-full bg-green-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-green-600 items-center">Save Edit {false ? <span className="loading loading-spinner text-success"></span> : <FontAwesomeIcon className="text-black   p-1 rounded-full aspect-square" icon={faPenToSquare} />}</button>

                    </div>
                </form>
                <Toaster richColors closeButton position="bottom-right" />
            </section>
        </div>
    )
}
