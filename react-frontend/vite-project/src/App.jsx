
import { NavBar } from './components/global/navBar.jsx'
import { Footer } from './components/global/footer.jsx'
import { Home } from './components/home/home.jsx'
import { Posts } from './components/post/post.jsx'
import { PostRent } from './components/postRent/postRent.jsx'
import { PostDetail } from './components/postDetail/postDetail.jsx'
import './App.css'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import { Login } from './components/login/login.jsx'
import { CreateAccount } from './components/login/createAccount.jsx'
import {PrivateRoute} from './components/privateRoute.jsx'
import { PublicRoute } from './publicRoute.jsx'
import { Profile } from './components/profile/profile.jsx'
import { EditPost } from './components/postRent/editPost.jsx'

function App() {


  return (
    <>
    <Router>

      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/posts/details/:post_id' element={
          <PrivateRoute>

          <PostDetail/>
          </PrivateRoute>
          } >

          </Route>


        <Route path='/posts/edit/:post_id' element={
          <PrivateRoute>

          <EditPost/>
          </PrivateRoute>
          } >

          </Route>


        <Route path='/profile/:profileId' element={
          <PrivateRoute>

          <Profile/>
          </PrivateRoute>
          } ></Route>
        <Route path='/postRent' element={
          <PrivateRoute>

          <PostRent/>
          </PrivateRoute>
          } ></Route>
        <Route path='/login' element={
          <PublicRoute>

            <Login/>
            </PublicRoute>

        }></Route>
        <Route path='/create' element={
           <PublicRoute>
            
          <CreateAccount/>
           </PublicRoute>
          } ></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
