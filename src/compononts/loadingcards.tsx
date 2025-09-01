

export const Loadingslider:React.FC<{}>=()=>{

  
return(
<li className="flex flex-col min-w-[250px] max-w-[250px] bg-gray-100 h-[100%] rounded-2xl items-center justify-around animate-pulse">
  <div className="flex flex-row w-[95%] h-[60%] justify-around">
  
    <div className="w-[40%] h-full bg-gray-300 rounded-xl"></div>
    <div className="maininfo w-[55%] flex flex-col items-center justify-around">
      <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
      <div className="h-2 w-2/3 bg-gray-300 rounded"></div>
    </div>
  </div>


  <div className="itembuttons h-[25%] w-full flex flex-row justify-around items-center">
    <div className="h-[50%] w-[35%] bg-gray-300 rounded"></div>
    <div className="h-[50%] w-[40%] bg-gray-300 rounded"></div>
  </div>
</li>
)
}



export const Loadingproduct:React.FC<{}>=()=>{

  
return(
<li className="flex flex-col w-[90%] min-h-[23%] max-h-[23%] bg-gray-100  rounded-2xl items-center justify-around animate-pulse">
  <div className="flex flex-row w-[95%] h-[60%] justify-around">
  
    <div className="w-[40%] h-full bg-gray-300 rounded-xl"></div>
    <div className="maininfo w-[55%] flex flex-col items-center justify-around">
      <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
      <div className="h-2 w-2/3 bg-gray-300 rounded"></div>
    </div>
  </div>


  <div className="itembuttons h-[25%] w-full flex flex-row justify-around items-center">
    <div className="h-[50%] w-[35%] bg-gray-300 rounded"></div>
    <div className="h-[50%] w-[40%] bg-gray-300 rounded"></div>
  </div>
</li>
)
}


export const Loadingsingleproduct:React.FC<{}>=()=>{

  
return(
<section className="container mx-auto flex flex-col h-[800px] justify-around text-[15px] sm:text-[18px] md:text-[20px] xl:text-[24px] animate-pulse">


  <div className="flex flex-row items-center justify-around w-full h-[400px] mx-auto">
    <div className="w-[40%] h-[70%] sm:h-[75%] 2xl:h-[90%] bg-gray-300 rounded-xl"></div>


    <div className="maininfo w-[55%] h-[90%] gap-[6%] flex flex-col items-center justify-center">
      <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
      <div className="h-10 w-10 bg-gray-300 rounded-full"></div>

    
      <div className="flex flex-row h-[25%] w-full items-center justify-center gap-4">
        <div className="flex flex-row items-center w-[55%] sm:w-[35%] gap-2 justify-center">
          <div className="h-10 w-10 bg-gray-300 rounded"></div>
          <div className="h-12 w-[40%] lg:w-[35%] bg-gray-300 rounded"></div>
          <div className="h-10 w-10 bg-gray-300 rounded"></div>
        </div>
        <div className="h-12 w-[35%] sm:w-[22%] lg:w-[19%] bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>

 
  <div className="flex flex-row w-full h-[150px] items-center justify-center mb-[20px] gap-4">
    <div className="h-12 w-12 bg-gray-300 rounded"></div>
    <div className="flex flex-row h-full overflow-hidden w-[210px] sm:w-[430px] md:w-[540px] lg:w-[870px] gap-2">
      {Array(8).fill(0).map((_, i) => (
        <div key={i} className="min-w-[100px] max-w-[100px] h-full bg-gray-300 rounded"></div>
      ))}
    </div>
    <div className="h-12 w-12 bg-gray-300 rounded"></div>
  </div>


  <div className="flex flex-col mx-auto w-[90%] h-300px gap-[20px] justify-between">
    <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
    <div className="h-20 w-full bg-gray-300 rounded"></div>
  </div>

</section>
)
}



export const Loadingorder:React.FC<{}>=()=>{

return(
<li className="flex flex-col w-[47%]  sm:w-[30%] h-[30%] sm:h-[45%] bg-gray-100  rounded-2xl items-center justify-around animate-pulse">
  <div className="flex flex-row w-[95%] h-[60%] justify-around">
  
    <div className="w-[40%] h-full bg-gray-300 rounded-xl"></div>
    <div className="maininfo w-[55%] flex flex-col items-center justify-around">
      <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
      <div className="h-2 w-2/3 bg-gray-300 rounded"></div>
    </div>
  </div>


  <div className="itembuttons h-[25%] w-full flex flex-row justify-around items-center">
    <div className="h-[50%] w-[35%] bg-gray-300 rounded"></div>
    <div className="h-[50%] w-[40%] bg-gray-300 rounded"></div>
  </div>
</li>
)
}
export const Loadingorderadmin:React.FC<{}>=()=>{

return(
<li className="flex flex-col w-[90%] min-h-[32%] max-h-[32%] ] bg-gray-100  rounded-2xl items-center justify-around animate-pulse">
  <div className="flex flex-row w-[95%] h-[60%] justify-around">
  
    <div className="w-[40%] h-full bg-gray-300 rounded-xl"></div>
    <div className="maininfo w-[55%] flex flex-col items-center justify-around">
      <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
      <div className="h-2 w-2/3 bg-gray-300 rounded"></div>
    </div>
  </div>


  <div className="itembuttons h-[25%] w-full flex flex-row justify-around items-center">
    <div className="h-[50%] w-[35%] bg-gray-300 rounded"></div>
    <div className="h-[50%] w-[40%] bg-gray-300 rounded"></div>
  </div>
</li>
)
}

