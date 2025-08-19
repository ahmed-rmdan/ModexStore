import React from "react"

export async function addproduct(data:FormData){
//   ev.preventDefault()
//       const data = new FormData(ev.currentTarget);
    
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