
export const paginationreducers={
    handlepage(state:number,action:{type:string,payload:{page:number}}){
                return state=action.payload.page
    }

}