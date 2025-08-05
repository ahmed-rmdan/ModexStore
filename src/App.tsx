

import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import { Root } from "./pages/root"
import { Eroor } from "./pages/errorpg"
import { Mainpg } from "./pages/mainpaige"
import { Locations } from "./pages/locatinpg"
import { Catagories } from "./pages/catagories" 
import { Shoppg } from "./pages/shoppg"
import { Productpg } from "./pages/productpg"
import { Cateogry } from "./compononts/cateogry"
import { Aboutus } from "./pages/aboutus"
import { Terms } from "./pages/terms"
import { Contact } from "./pages/contact"
import { Allproducts } from "./compononts/allproducts"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"


const router=createBrowserRouter([
  {path:'/',element:<Root></Root>,errorElement:<Eroor></Eroor>,
    children:[
      {index:true,element:<Mainpg></Mainpg>},
      {path:'/locations',element:<Locations></Locations>},
      {path:'/categories',element:<Catagories></Catagories>},  
      {path:'/products',element:<Shoppg></Shoppg>,children:[
        {index:true,element:<Allproducts></Allproducts>},
        {path:'/products/:category',element:<Cateogry></Cateogry>}
      ]},
      
      {path:'/product/:productid',element:<Productpg></Productpg>},
      {path:'/aboutus' ,element:<Aboutus></Aboutus>},
      {path:'/terms',element:<Terms></Terms>},
      {path:'/contact',element:<Contact></Contact>},
      {path:'/signin',element:<Login></Login>},
     {path:'/signup',element:<Signup></Signup>}

    ]
  }
])


function App() {


  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
