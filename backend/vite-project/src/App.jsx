
import { NavBar } from './components/global/navBar.jsx'
import { Footer } from './components/global/footer.jsx'
import { Home } from './pages/Home.jsx'
import { Search } from './pages/Search.jsx'
import { CreatePost } from './pages/CreatePost.jsx'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { CreateAccount } from './pages/CreateAccount.jsx'
import { PrivateRoute } from './components/privateRoute.jsx'
import { PublicRoute } from './publicRoute.jsx'
import { Profile } from './pages/Profile.jsx'
import { EditProfile } from './pages/EditProfile.jsx'
import { Post } from './pages/Post.jsx'
import { EditPost } from './pages/EditPost.jsx'
import { Admin } from './pages/Admin.jsx'
import { AdminRoute } from './components/AdminRoute.jsx'
import { AdminLogin } from './pages/AdminLogin.jsx'
import { PageNotFound } from './components/ui/PageNotFound.jsx'
import {  AdminPostEdit } from './components/admin/pages/AdminEditPost.jsx'
import { AdminEditProfile } from './components/admin/pages/AdminEditProfile.jsx'
import { AdminUserProfile } from './components/admin/pages/AdminUserProfile.jsx'







function App() {


  return (
    <div className='flex flex-col min-h-[100vh]'>


      <Router>


        <NavBar />


        <Routes>

          <Route path='/' element={<Home />}></Route>

          <Route path='/search' element={<Search />}></Route>

          <Route path='/post/edit/:postId'
            element={
              <PrivateRoute>
                <EditPost />
              </PrivateRoute>
            } >
          </Route>

          <Route path='/post/:postId'
            element={<Post />} >
          </Route>



          <Route path='/profile/edit'
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            } >
          </Route>


          <Route path='/profile/:userId'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } >
          </Route>


          <Route path='/profile/edit/:userId'
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            } >
          </Route>


          <Route path='/post/create'
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            } >
          </Route>


          <Route path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }>
          </Route>


          <Route path='/create'
            element={
              <PublicRoute>
                <CreateAccount />
              </PublicRoute>
            } >
          </Route>



          <Route path={`/admin${import.meta.env.VITE_REACT_APP_ADMIN_URL}`}
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }>

          </Route>
          <Route path={`/admin${import.meta.env.VITE_REACT_APP_ADMIN_URL}/post/edit/:postId`}
            element={
              <AdminRoute>
                <AdminPostEdit />
              </AdminRoute>
            }>

          </Route>
          <Route path={`/admin${import.meta.env.VITE_REACT_APP_ADMIN_URL}/profile/edit/:userId`}
            element={
              <AdminRoute>
                <AdminEditProfile />
              </AdminRoute>
            }>

          </Route>
          <Route path={`/admin${import.meta.env.VITE_REACT_APP_ADMIN_URL}/profile/:userId`}
            element={
              <AdminRoute>
                <AdminUserProfile />
              </AdminRoute>
            }>

          </Route>


          <Route path={`/admin${import.meta.env.VITE_REACT_APP_ADMIN_URL}/login`}
            element={
              <AdminLogin />
            }>
          </Route>















          // 404 page not found
          <Route 
          path='*'
            element={
             <PageNotFound/>
            }>
          </Route>


        </Routes>

        <Footer />


      </Router>


    </div>
  )
}

export default App
