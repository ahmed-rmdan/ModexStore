import type { item } from "../store/store";
import type { typeadminproducts } from "../types/types";
import type { locationtype,order } from "../types/types";

export async function addproduct(data:FormData){

    
      let arrslide=data.getAll('sliderimge').join(',')
       data.set('sliderimge',arrslide)
      
const formdata=Object.fromEntries(data.entries())

const input = {
  ...formdata,
  mainimge:''
  ,
  newprice: Number(formdata.newprice),
  oldprice: Number(formdata.oldprice),
};

const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}



const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     mutation($input: ProductInput!) {
        addproduct(input: $input) {
          message,id
        }
      }
    `,
       variables: {
      input:input
    }
    
  })
})
const datars=await res.json() 
if(datars.errors){
  throw new Error(datars.errors[0].message)
}


const id=datars.data.addproduct.id


const file=data.get('mainimge') as File
if(!file) return

if(file.name==='' && file.size===0) return;
try{
const RES=await fetch(`http://localhost:3000/uploadimge/${id}`,{
           method:'POST',
             body:data
})
}catch(err){
  console.log(err)
}

}
export async function getproducts(signal:any,type:string,activepage:number){
      
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'

  },
  body:JSON.stringify({
    query:`
     query($input: TypeInput!) {
        getproducts(input: $input){
    products {
      id
      name
      moreinfo
      mainimg
      newprice
      oldprice
      slideimg
      type
      offer
    },
    length
  }
      }
    `,
       variables: {
      input:{type,activepage}
    }
    
  })
})
const data=await res.json()
if(data.errors){
 throw new Error(data.errors[0].message)
}
console.log(data)
return {products:data.data.getproducts.products as [typeadminproducts],length:data.data.getproducts.length}



}

export async function getadminproducts(signal:any,type:string,activepage:number){
  

const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}
    
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     query($input: TypeInput!) {
        getadminproducts(input: $input){
    products {
      id
      name
      moreinfo
      mainimg
      newprice
      oldprice
      slideimg
      type
      offer
    },
    length
  }
      }
    `,
       variables: {
      input:{type,activepage}
    }
    
  })
})
const data=await res.json()
if(data.errors){
 throw new Error(data.errors[0].message)
}
console.log(data)
return {products:data.data.getadminproducts.products as [typeadminproducts],length:data.data.getadminproducts.length}



}


export async function getalloffers(){
   
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'
   
  },
  body:JSON.stringify({
    query:`
       query{
       getalloffers{
    products {
      id
      name
      moreinfo
      mainimg
      newprice
      oldprice
      slideimg
      type
      offer
    }
    
  } 
  }   
    `  
  })
})
const data=await res.json()
if(data.errors){
  throw new Error(data.errors[0].message)
}
console.log(data)
return {products:data.data.getalloffers.products as [typeadminproducts]}

}

export async function getadminoffers(){
  const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}
   
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
     Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
       query{
       getadminoffers{
    products {
      id
      name
      moreinfo
      mainimg
      newprice
      oldprice
      slideimg
      type
      offer
    }
    
  } 
  }   
    `
   
    
  })
})
const data=await res.json()
if(data.errors){
  throw new Error(data.errors[0].message)
}
console.log(data)
return {products:data.data.getadminoffers.products as [typeadminproducts]}

}


export async function getproduct(signal:any,id:string){
   let token=localStorage.getItem('token')
   if(!token){
  token=''
   }

const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
       query($input:GetProductInput){
       getproduct(input:$input){
    product{
      id
      name
      moreinfo
      mainimg
      newprice
      oldprice
      slideimg
      type
      offer
      isfav
      } 
      }
  
  
  }   
    `,
       variables: {
      input:{id}
    }
    
    
  })
})
const data=await res.json()
console.log(data)
type singleproduct ={
     id: string;
    name: string;
    moreinfo: string;
    mainimg: string;
    newprice: number;
    oldprice: number;
    slideimg: string;
    type: string;
    offer: boolean;
    isfav:boolean

}
console.log(data.data.getproduct.product)
return {product:data.data.getproduct.product as singleproduct}

}

export async function deleteproduct(input:string){
console.log(input)
   let token=localStorage.getItem('token')
   if(!token){
  token=''
   }

const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     mutation($input: DeleteProductInput!) {
        deleteproduct(input: $input) {
          message
        }
      }
    `,
       variables: {
      input:{id:input}
    }
    
  })
})
const data=await res.json() 
if(data.errors){
  throw new Error(data.errors[0].message)
}
console.log(data.data.deleteproduct.message);


}


export async function editproduct(data:{data:FormData,id:string}){
  const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}

  
      let arrslide=data.data.getAll('sliderimge').join(',')
       data.data.set('sliderimge',arrslide)
      console.log(arrslide)
const formdata=Object.fromEntries(data.data.entries())

const input = {
  ...formdata,
  mainimge:''
  ,
  newprice: Number(formdata.newprice),
  oldprice: Number(formdata.oldprice),
  id:data.id
};

console.log(input)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     mutation($input: EditProductInput!) {
        editproduct(input: $input) {
          message
        }
      }
    `,
       variables: {
      input:input
    }
    
  })
})
const datars=await res.json() 
console.log(datars.data.editproduct.message);


const file=data.data.get('mainimge') as File
if(!file) return

if(file.name==='' && file.size===0) return;
try{
const RES=await fetch(`http://localhost:3000/uploadimge/${data.id}`,{
           method:'POST',
             body:data.data
})
}catch(err){
  console.log(err)
}

}


export async function getsearchproducts(signal:any,search:string,activepage:number){
    console.log(search)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body:JSON.stringify({
    query:`
     query($input: TypeSearchInput!) {
        getsearchproducts(input: $input){
    products {
      id
      name
      moreinfo
      mainimg
      newprice
      oldprice
      slideimg
      type
      offer
    },
    length
  }
      }
    `,
       variables: {
      input:{search,activepage}
    }
    
  })
})
const data=await res.json()
console.log(data)
return {products:data.data.getsearchproducts.products as [typeadminproducts],length:data.data.getsearchproducts.length}



}

export async function createuser(data:FormData){

               
const formdata=Object.fromEntries(data.entries())


console.log(formdata)


const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body:JSON.stringify({
    query:`
     mutation($input:CreateUserInput!) {
        createuser(input: $input) {
          message
        }
      }
    `,
       variables: {
      input:formdata
    }
    
  })
})
 const datares=await res.json()

 if(datares.errors){
  throw new Error(datares.errors[0].message)
 }
console.log(datares.data)


}



export async function login(data:FormData){

  if(data.get('username')===''){
    throw new Error('please enter a username')
  }
  if(data.get('password')===''){
    throw new Error('please enter a password')
  }
             
const formdata=Object.fromEntries(data.entries())


console.log(formdata)


const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body:JSON.stringify({
    query:`
     mutation($input:LoginInput!) {
        login(input: $input) {
          token,userid
        }
      }
    `,
       variables: {
      input:formdata
    }
    
  })
})
 const datares=await res.json()

 if(datares.errors){
  throw new Error(datares.errors[0].message)
 }
console.log(datares.data)

 return {token:datares.data.login.token,userid:datares.data.login.userid}


}

export async function getwishlist(signal:any,page:number){
  console.log('start')
const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}
console.log(token)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     query ($input:getwishlistInput) {
        getwishlist(input:$input){
    products{
      id
      name
      moreinfo
      mainimg
      newprice
      oldprice
      slideimg
      type
      offer
    },length
   
  }
      }
    `,
    variables:{
      input:{page}
    }
   
    
  })
})  
const data=await res.json()
return {products:data.data.getwishlist.products as typeadminproducts[],length:data.data.getwishlist.length}

}



export async function wishlistaction(productid:string){

const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}

const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     mutation ($input:wishlistactionInput) {
        wishlistaction(input:$input){
                 message
                
                }
      }
    `,
    variables:{
      input:{productid}
    }
   
    
  })
})  

const data=await res.json()
if(data.errors){
  throw new Error('eroor not authorized')

}

console.log(data.data.wishlistaction.message)

}


export async function islogin(){
console.log('dsadsaddsadsads')
const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}
console.log(token)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     mutation {
        islogin{
                 message          
                }
      }
    ` 
  })
})  

const data=await res.json()
if(data.errors){
  throw new Error('eroor not authorized')

}
console.log(data.data.islogin.message)
return data.data.islogin.message

}



 export async function createorder(){

    const token=localStorage.getItem('token')
  if(!token){
  throw new Error('not authorized')
        }
     const addressstorge:{address:string,location:locationtype|null}=JSON.parse(localStorage.getItem('address') as string)
     if(!addressstorge){
      throw new Error('address is missing')
     }
       const address=addressstorge.address
       const location=addressstorge.location

     const purchaseitems:item[]=JSON.parse(localStorage.getItem('items') as string)
          const items=purchaseitems.map(elm=>{
            return {productid:elm.id,quantity:elm.quantity}
          })
     const input={
      items,
      address,
      location
     }
console.log(input)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     mutation ($input:createorderInput){
        createorder(input:$input){
                 message          
                }
      }
    ` ,
variables:{
     input
  }

 }
)})  

const data=await res.json()
if(data.errors){
  console.log(data.errors)
  throw new Error('eroor not authorized')

}
console.log(data.data.createorder.message)
return data.data.createorder.message

}


 export async function stripepayment(){

    const token=localStorage.getItem('token')
  if(!token){
  throw new Error('not authorized')
        }
  
     const purchaseitems:item[]=JSON.parse(localStorage.getItem('items') as string)
     if(!purchaseitems){
      throw new Error('somthing is wrong')
     }
          const items=purchaseitems.map(elm=>{
            return {productid:elm.id,quantity:elm.quantity}
          })
try{
 const res=await fetch('http://localhost:3000/stripecheck',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify(items)

})  

const data=await res.json()
return data
}catch(err){
  throw new Error('not authorized')
}

}



export async function getuserorders(signal:any,page:number){
  console.log('start')
const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}
console.log(token)

try{
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     query($input:getuserordersInput){
        getuserorders(input:$input){
    orders{
      id
      name
      details
      address
      at
      state
      payment
      totalprice
      location{
      longitude
      latitude
      }
    },
      length
    }
   
  }
      
    `,
    variables:{
      input:{page}
    }
       
  })
})  

const data=await res.json()
console.log('sssssssssssssssssssss')

return {orders:data.data.getuserorders.orders as order[],length:data.data.getuserorders.length as number}

}catch(err){
  console.log(err)
}


}

export async function getadminorders(signal:any,page:number){
  console.log('start')
const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}
console.log(token)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     query($input:getuserordersInput){
        getadminorders(input:$input){
    orders{
      id
      name
      details
      address
      at
      state
      payment
      totalprice
      location{
      longitude
      latitude
      }
      
    },
    length
   
  }
      }
    `,
     variables:{
      input:{page}
    }
       
  })
})  
const data=await res.json()
console.log(data.data.getadminorders)
return {orders:data.data.getadminorders.orders as order[],length:data.data.getadminorders.length}

}

export async function deleteorder(orderid:string){

const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}

const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     mutation ($input:deleteorderInput) {
        deleteorder(input:$input){
                 message
                
                }
      }
    `,
    variables:{
      input:{orderid}
    }
   
    
  })
})  

const data=await res.json()
if(data.errors){
  throw new Error('eroor not authorized')

}

console.log(data.data.deleteorder.message)


}



export async function editorder(input:{orderid:string,state:string}){

const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}
console.log(input)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     mutation($input:editorderInput){
        editorder(input:$input){
                 message
                }
      }
    `,
    variables:{
      input
    }
   
    
  })
})  

const data=await res.json()
if(data.errors){
  console.log(data.errors)
  throw new Error('eroor not authorized')

}

console.log(data.data.editorder.message)


}


export async function loginadmin(data:FormData){

  if(data.get('username')===''){
    throw new Error('please enter a username')
  }
  if(data.get('password')===''){
    throw new Error('please enter a password')
  }
             
const formdata=Object.fromEntries(data.entries())


console.log(formdata)


const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body:JSON.stringify({
    query:`
     mutation($input:LoginInput!) {
        loginadmin(input:$input) {
          token
        }
      }
    `,
       variables: {
      input:formdata
    }
    
  })
})
 const datares=await res.json()

 if(datares.errors){
  throw new Error(datares.errors[0].message)
 }
console.log(datares.data)

 return {token:datares.data.loginadmin.token as string}


}

export async function isadmin(){
console.log('dsadsaddsadsads')
const token=localStorage.getItem('token')
if(!token){
  throw new Error('not authorized')
}
console.log(token)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: `Bearer ` + token
  },
  body:JSON.stringify({
    query:`
     query{
        isadmin{
                 message          
                }
      }
    ` 
  })
})  

const data=await res.json()
if(data.errors){
  throw new Error('eroor not authorized')

}

return data.data.isadmin.message

}