
export const userreducer={
    setthetoken(state:{islogin:boolean},action:{type:string,payload:{token:string}}){
                          
                   localStorage.setItem('token',action.payload.token)

                return state={islogin:true}
    },
      deletethetoken(state:{islogin:boolean}){
                  localStorage.removeItem('token')
                return state={islogin:false}
    },getthetoken(state:{islogin:boolean}){
                    const token=localStorage.getItem('token')
                   if(!token){
                     return state={islogin:false}
                   }
                return state={islogin:true}
    }

}