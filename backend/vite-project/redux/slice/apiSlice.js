import { createApi ,fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000",
        
    }),
    endpoints:(builder)=>({
        getPost:builder.query({
            query:(param)=>`/post?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&area=${param.area}&lt=${param.lt}&gt=${param.gt}&floor=${param.floor}&bed=${param.bed}&bath=${param.bath}`
        }),
        pfpPost:builder.query({
            query:(param)=>({
                url:`/auth/pfpPost?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&userId=${param}`,
                credentials:"include",
            })
            
        }),
        profile:builder.query({
            query:(param)=>({
                url:`/auth/profile?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
                credentials:"include",
            })
            
        }),
        getSinglePost:builder.query({
            query:(param)=>({
                url:`/post/single?_id=${param}`,
                credentials:"include",
            })
            
        }),
        uploadPost:builder.mutation({
            query:(data)=>({
                url:`/post/create?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
                method:"POST",
                body:data,
                credentials:"include",
            })
        }),
        editPost:builder.mutation({
            query:(data)=>({
                url:`/post/edit?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
                method:"PATCH",
                body:data,
                credentials:"include",
            })
        }),
        editProfile:builder.mutation({
            query:(data)=>({
                url:`/auth/edit?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
                method:"PATCH",
                body:data,
                credentials:"include",
            })
        }),
        createUser:builder.mutation({
            query:(data)=>({
                url:`/auth/create?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
                method:"POST",
                body:data,
                credentials:"include",
            })
        }),
        login:builder.mutation({
            query:(data)=>({
                url:`/auth/login?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
                method:"POST",
                body:data,
                credentials:"include",
            })
        }),
        logout:builder.mutation({
            query:()=>({
                url:`/auth/logout`,
                method:"DELETE",
                credentials:"include",
            })
        }),

        // admin api(s)

        
        adminLogin:builder.mutation({
            query:(data)=>({
                url:`/admin/login?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&nimda=${import.meta.env.VITE_REACT_APP_ADMIN_KEY}`,
                method:"POST",
                body:data,
                credentials:"include",
            })
        }),
        adminPostEdit:builder.mutation({
            query:(data)=>({
                url:`/admin/post?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&nimda=${import.meta.env.VITE_REACT_APP_ADMIN_KEY}`,
                method:"PATCH",
                body:data,
                credentials:"include",
            })
        }),
        adminUserEdit:builder.mutation({
            query:(data)=>({
                url:`/admin/user?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&nimda=${import.meta.env.VITE_REACT_APP_ADMIN_KEY}`,
                method:"PATCH",
                body:data,
                credentials:"include",
            })
        }),
        adminPost:builder.query({
            query:(param)=>({
                url:`/admin/post?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&nimda=${import.meta.env.VITE_REACT_APP_ADMIN_KEY}&area=${param.area}&lt=${param.lt}&gt=${param.gt}&floor=${param.floor}&bed=${param.bed}&bath=${param.bath}&isApproved=${param.isApproved}`,
                credentials:"include",
            })
            
        }),
        adminUser:builder.query({
            query:(param)=>({
                url:`/admin/user?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&nimda=${import.meta.env.VITE_REACT_APP_ADMIN_KEY}&isVerified=${param}`,
                credentials:"include",
            })
            
        }),
        singleUser:builder.query({
            query:(param)=>({
                url:`/admin/user/single?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&nimda=${import.meta.env.VITE_REACT_APP_ADMIN_KEY}&userId=${param.userId}&post=${param.post}`,
                credentials:"include",
            })
            
        }),


    })
})







export const {
    useGetPostQuery,useUploadPostMutation,
    useCreateUserMutation,useLoginMutation,
    usePfpPostQuery,useGetSinglePostQuery,
    useProfileQuery,useEditProfileMutation,
    useEditPostMutation,useAdminLoginMutation,
    useAdminPostQuery,useAdminPostEditMutation,
    useAdminUserQuery,useAdminUserEditMutation,
    useSingleUserQuery,useLogoutMutation,
    
    } = apiSlice