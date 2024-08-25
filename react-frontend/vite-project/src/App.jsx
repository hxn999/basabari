
import { NavBar } from './components/global/navBar.jsx'
import { Footer } from './components/global/footer.jsx'
import { Home } from './components/home/home.jsx'
import { Posts } from './components/post/post.jsx'
import { PostRent } from './components/postRent/postRent.jsx'
import { PostDetail } from './components/postDetail/postDetail.jsx'
import './App.css'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

function App() {


  return (
    <>
    <Router>

      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/posts/details/:post_id' element={<PostDetail/>} ></Route>
        <Route path='/postRent' element={<PostRent/>} ></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
