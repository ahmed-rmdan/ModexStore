

import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import { Root } from "./pages/root"
import { Eroor } from "./pages/errorpg"
import { Mainpg } from "./pages/mainpaige"
import { Locationspg } from "./pages/locatinpg"
import { Categoriespg } from "./pages/categoriespg"
import { Shoppg } from "./pages/shoppg"
import { Productpg } from "./pages/productpg"
import { Catogry } from "./compononts/catogry"
import { Aboutus } from "./pages/aboutus"
import { Terms } from "./pages/terms"
import { Contact } from "./pages/contact"
const router=createBrowserRouter([
  {path:'/',element:<Root></Root>,errorElement:<Eroor></Eroor>,
    children:[
      {index:true,element:<Mainpg></Mainpg>},
      {path:'/locations',element:<Locationspg></Locationspg>},
      {path:'/categories',element:<Categoriespg></Categoriespg>},
      {path:'/categories/:catogry',element:<Catogry></Catogry>},
      {path:'/products',element:<Shoppg></Shoppg>},
      
      {path:'/products/:productid',element:<Productpg></Productpg>},
      {path:'/aboutus' ,element:<Aboutus></Aboutus>},
      {path:'/terms',element:<Terms></Terms>},
      {path:'/contact',element:<Contact></Contact>}

    ]
  }
])


function App() {


  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
