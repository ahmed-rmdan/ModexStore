
export const dialogreducers={
    showdialog(state:{dialog:string,imges:string[],noimge:number},action:{type:string,payload:{dialog:string,imges:string[],noimge:number}}){
                return state=action.payload
    },
    hidedialog(state:{dialog:string,imges:string[],noimge:number}){
     return state={dialog:'',imges:[],noimge:0}
    }
}