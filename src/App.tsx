

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
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import { Wishlist } from "./pages/wishlistpg"
import { Puchasepg } from "./pages/purchasepg"
import { Paymentpg } from "./pages/paymentpg"
import { Thankyoupg } from "./pages/thankyoupg"
import { Myorders } from "./pages/myorders"
import { Adminpg } from "./pages/admin/adminpg"
import { Loginadmin } from "./pages/admin/loginadminpg"
import { Productsadmin } from "./pages/admin/productsadmin"
import { Offersadminpg } from "./pages/admin/offersadminpage"
import { Addproduct } from "./pages/admin/addproduct"
import { Editproduct } from "./pages/admin/editproduct"
import { Ordersadminpg } from "./pages/admin/ordersadminpg"
import { Ordereditpg } from "./pages/admin/editorderpg"
import { Resetpass } from "./pages/resetpass"
import { Confirmnewpass } from "./pages/confirmnewpass"
import { Searchproductspg } from "./pages/searchproductspg"
import { QueryClientProvider,QueryClient} from "@tanstack/react-query"


const router=createBrowserRouter([
  {path:'/',element:<Root></Root>,errorElement:<Eroor></Eroor>,
    children:[
      {index:true,element:<Mainpg></Mainpg>},
      {path:'/locations',element:<Locations></Locations>},
      {path:'/categories',element:<Catagories></Catagories>},  
      {path:'/products',element:<Shoppg></Shoppg>,children:[
        {path:'/products/:category',element:<Cateogry></Cateogry>},
        {path:'/products/search/:search',element:<Searchproductspg></Searchproductspg>}
      ]},
      
      {path:'/product/:productid',element:<Productpg></Productpg>},
      {path:'/aboutus' ,element:<Aboutus></Aboutus>},
      {path:'/terms',element:<Terms></Terms>},
      {path:'/contact',element:<Contact></Contact>},
      {path:'/signin',element:<Login></Login>},
     {path:'/signup',element:<Signup></Signup>},
     {path:'/wishlist',element:<Wishlist></Wishlist>},
     {path:'/purchase',element:<Puchasepg></Puchasepg>},
      {path:'/payment',element:<Paymentpg></Paymentpg>},
      {path:'/thankyou',element:<Thankyoupg></Thankyoupg>},
      {path:'/myorders',element:<Myorders></Myorders>},
      {path:'/resetpass',element:<Resetpass></Resetpass>},
      {path:'/confirmnewpass',element:<Confirmnewpass></Confirmnewpass>}
      
    ]
  }
  , {path:'/admin',element:<Adminpg></Adminpg>,children:[
           {path:'login',element:<Loginadmin></Loginadmin>},
           {path:'products/:category',element:<Productsadmin></Productsadmin>},
           {path:'offers',element:<Offersadminpg></Offersadminpg>},
           {path:'addproduct',element:<Addproduct></Addproduct>},
           {path:'editproduct/:productid',element:<Editproduct></Editproduct>},
           {path:'orders',element:<Ordersadminpg></Ordersadminpg>},
          {path:'orders/edit/:orderid',element:<Ordereditpg></Ordereditpg>}

   

          ]}
])


function App() {
const client=new QueryClient()




  return (
    <QueryClientProvider client={client}>

 <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  
  )
}

export default App
