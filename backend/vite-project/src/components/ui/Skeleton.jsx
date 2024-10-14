import React from 'react'

export  function Skeleton({h,w}) {
  return (
    <div class={`${h} ${w} bg-gray-300 rounded  relative overflow-hidden`}>
        <div class="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-wave duration-100"></div>
    </div>
  )
}
