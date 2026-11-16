import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './dashboard/Layout'
import BlogHome from './pages/BlogHome'
import Author from './pages/Author'
import BlogDetails from './pages/BlogDetails'
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <BlogHome />
        },
        {
          path: '/author/:id',
          element: <Author />
        },
        {
          path: '/blog/:id',
          element: <BlogDetails />
        }
      ]
    }
  ])
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route path="/" element={<BlogHome />} />
    //       <Route path="/author/:id" element={<Author />} />
    //       <Route path="/blog/:id" element={<BlogDetails />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  )
}

export default App