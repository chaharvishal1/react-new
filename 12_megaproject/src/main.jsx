import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path='/' element={<Home />} />
      <Route element={<AuthLayout authentication={false} />}>
        <Route path='/login' element={<Login />} />
      </Route>
      <Route element={<AuthLayout authentication={false} />}>
        <Route path='/signup' element={<Signup />} />
      </Route>
      <Route element={<AuthLayout authentication />}>
        <Route path='/all-posts' element={<AllPost />} />
      </Route>
      <Route element={<AuthLayout authentication />}>
        <Route path='/add-post' element={<AddPost />} />
      </Route>
      <Route element={<AuthLayout authentication />}>
        <Route path='/edit-post/:slug' element={<EditPost />} />
      </Route>
      <Route path='/post/:slug' element={<Post />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
