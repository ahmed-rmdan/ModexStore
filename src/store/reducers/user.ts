

export const userreducer={
    setthetoken(state:{islogin:boolean},action:{type:string,payload:{token:string}}){
                          
                   localStorage.setItem('token',action.payload.token)
                    localStorage.setItem('date',JSON.stringify(Date.now()))
                   
                   
                return state={islogin:true}
    },
      deletethetoken(state:{islogin:boolean}){
                  localStorage.removeItem('token')
                  localStorage.removeItem('date')
                return state={islogin:false}
    },getthetoken(state:{islogin:boolean}){
                    const token=localStorage.getItem('token')
                   if(!token){
                     return state={islogin:false}
                   }
                return state={islogin:true}
    }

}