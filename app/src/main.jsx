import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { 
  HomeLayout,
  CareerLayout,
  ClusterLayout,
  MessageLayout
} from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomeLayout />} />
      <Route path="home" element={<HomeLayout />} />
      <Route path="career" element={<CareerLayout />} />
      <Route path="cluster" element={<ClusterLayout />} />
      <Route path="message" element={<MessageLayout />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
