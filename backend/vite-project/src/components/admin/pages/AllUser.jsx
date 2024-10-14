import React from 'react'
import {  useAdminUserQuery } from '../../../../redux/slice/apiSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../../ui/Loading.jsx'
import { Error } from '../../ui/Error.jsx'
import { fetchingActions } from '../../../../redux/slice/fetchSlice.js'
import { AdminPostCard } from '../components/AdminPostCard.jsx'
import { AdminUserCard } from '../components/AdminUserCard.jsx'

export function AllUser() {
  const dispatch = useDispatch()
  let lol = useSelector(st => st.fetching)
  let content = null
  const { data, error, isError, isLoading, isSuccess } = useAdminUserQuery(true)

  if (isError) {
    content = <h1>An Error Occured !</h1>
  }
  if (isLoading) {
    content = <Loading text={"Loading Users"} />
  }
  if (isSuccess && data.users.length == 0) {
    content = <Error text={"No Verified users found"} />
  }
  else if (isSuccess) {

    content = data.users.map((_user) => <AdminUserCard user={_user}/>)

  }
  return (

    <div className='flex flex-col gap-4 w-full'>

      <h3>{data?.users?.length ? <span> <span className='text-green-500 font-semibold'>{data?.users?.length} </span>Verified user ...</span>: "No Verified user"} </h3>
      <div className='grid grid-cols-4 max-[1024px]:grid-cols-2 max-[700px]:grid-cols-1 gap-4'>

        {content}
      </div>

    </div>
  )
}