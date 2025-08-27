export type typeadminproducts={
   id:string,
    name: string,
    moreinfo: string,
    mainimg: string,
    newprice: number,
    oldprice: number,
    slideimg: string,
    type: string ,
    offer:boolean 
}
export type locationtype={
       longitude :number,
   latitude :number
}
export type order={
  id:string,
    name:string,
    details:string,
    at:string,
    address:string,
    state:string,
    payment:string,
    totalprice:number,
    location:locationtype |null
  }
