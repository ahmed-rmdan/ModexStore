
export const dialogreducers={
    showdialog(state:string='',action:{type:string,payload:string}){
                 state=action.payload
    },
    hidedialog(state:string=''){
      state=''
    }
}