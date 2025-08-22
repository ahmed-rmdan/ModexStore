import type { typeadminproducts } from "../types/types";

export async function addproduct(data:FormData){
 console.log('addddd')
    
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

console.log(input)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'
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
console.log(datars.data.addproduct.id);


const id=datars.data.addproduct.id

// const datanew = new FormData(ev.currentTarget);
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

export async function getadminproducts(signal:any,type:string,activepage:number){
    console.log(type)
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
console.log(data)
return {products:data.data.getproducts.products as [typeadminproducts],length:data.data.getproducts.length}



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
console.log(data)
return {products:data.data.getalloffers.products as [typeadminproducts]}



}


export async function getproduct(signal:any,id:string){
   
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'
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
return {product:data.data.getproduct.product as typeadminproducts}

}

export async function deleteproduct(input:string){
console.log(input)
const res=await fetch('http://localhost:3000/graphql',{
  method:'POST',
  headers:{'Content-Type': 'application/json',
    'Accept': 'application/json'
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
console.log(data.data.deleteproduct.message);


}


export async function editproduct(data:{data:FormData,id:string}){

  
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
    'Accept': 'application/json'
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