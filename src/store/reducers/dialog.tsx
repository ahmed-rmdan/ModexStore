
export const dialogreducers={
    showdialog(state:{dialog:string,imges:string[]},action:{type:string,payload:{dialog:string,imges:string[]}}){
                return state=action.payload
    },
    hidedialog(state:{dialog:string,imges:string[]}){
     return state={dialog:'',imges:[]}
    }
}