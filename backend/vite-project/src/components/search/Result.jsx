
import { useDispatch, useSelector } from "react-redux"
import { Card } from "./Card.jsx"
import { useGetPostQuery } from "../../../redux/slice/apiSlice.js";
import { fetchingActions } from "../../../redux/slice/fetchSlice.js";
import { LinearProgress } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Loading } from "../ui/Loading.jsx";
import { Error } from "../ui/Error.jsx";





const FastBufferProgress = styled(LinearProgress)({
    '& .MuiLinearProgress-bar1Buffer': {
        animationDuration: '0.6s', // Decrease primary bar animation duration
    },
    '& .MuiLinearProgress-bar2Buffer': {
        animationDuration: '0.6s', // Decrease secondary buffer bar animation duration
    },
});


export function Result() {

    let lol = useSelector(state => state.fetching)
    const dispatch = useDispatch()

    let content = null

    const { data, error, isError, isLoading, isSuccess, } = useGetPostQuery({ area: lol.area, lt: lol.lt, gt: lol.gt, bed: lol.bed, bath: 0, floor: lol.floor })

    // setting content according to situation
    if (isError) {
        content = <h1>An Error Occured !</h1>
    }
    if (isLoading) {
        content = <Loading text={"Finding Your Home"}/>
    }
    if (isSuccess && data.post.length == 0) {
        content = <Error text={"No homes found in "} area={lol.area}/>
    }
    else if (isSuccess) {
        dispatch(fetchingActions.set({ key: "post", value: data.post }))
        console.log("hi")
        content = [...lol.post].sort((a, b) => {
            if (lol.sort == "pra") {
                return a.rent - b.rent
            }
            else if (lol.sort == "prd") {
                return b.rent - a.rent
            }
            else if (lol.sort == "new") {
                return b.date - a.date
            }
            else if (lol.sort == "old") {
                return a.date - b.date
            }

        }).map((_post) =>
            <Card post={_post} />
        )

    }
    console.log(lol.sort)

    return (
        <>
            <section className="mx-auto max-w-7xl mt-4 px-8">
                <h3><span className="text-green-600 font-bold">{data?.post.length ? data?.post.length : "No"}</span> homes <span className="text-green-600 font-bold">found </span>
                    ... </h3>

                <div className="grid grid-cols-3 gap-4 mt-5 max-[1024px]:grid-cols-2 max-[700px]:grid-cols-1">

                    {content}

                </div>
            </section>
        </>
    )
}