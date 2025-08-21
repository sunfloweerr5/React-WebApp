import MainLayout from "./Layouts/MainLayout";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
function App() { 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/"element= {<MainLayout /> }>
      <Route index element = {<HomePage/>}/>
      <Route path= "/about" element={<AboutPage />}/>
      <Route path= "*" element={<NotFound />}/>

      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App;
