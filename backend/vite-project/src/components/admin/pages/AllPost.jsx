import React from 'react'
import { PostFilter } from '../../search/postFilter.jsx'
import { useAdminPostQuery } from '../../../../redux/slice/apiSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../../ui/Loading.jsx'
import { Error } from '../../ui/Error.jsx'
import { fetchingActions } from '../../../../redux/slice/fetchSlice.js'
import { AdminPostCard } from '../components/AdminPostCard.jsx'

export function AllPost() {
  const dispatch = useDispatch()
  let lol = useSelector(st => st.fetching)
  let content = null
  const { data, error, isError, isLoading, isSuccess } = useAdminPostQuery({ area: lol.area, lt: lol.lt, gt: lol.gt, bed: lol.bed, bath: 0, floor: lol.floor, isApproved: true })

  if (isError) {
    content = <h1>An Error Occured !</h1>
  }
  if (isLoading) {
    content = <Loading text={"Finding Your Home"} />
  }
  if (isSuccess && data.post.length == 0) {
    content = <Error text={"No homes found in "} area={lol.area} />
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

      <AdminPostCard post={_post} />

    )

  }
  return (
    <div className='space-y-4 gap-4 w-full'>

      <PostFilter />
      <h3>{data?.post?.length? <span> <span className='text-green-500 font-semibold'>{data?.post?.length} </span>Approved post ...</span>: "No Approved post"} </h3>
      <div className='grid grid-cols-4 max-[1024px]:grid-cols-2 max-[700px]:grid-cols-1 gap-4'>

        {content}
      </div>

    </div>
  )
}
