
import React from "react"
import { Headeradmin } from "../../compononts/admin/navadmin"
import { Dshboard } from "../../compononts/admin/dashboard"
import { Outlet } from "react-router"


export const Adminpg:React.FC<{}>=()=>{





    return(
        <div className="flex flex-col ">
              <Headeradmin></Headeradmin>
              <div className="flex flex-row text-[2px] sm:text-[3.5px]   lg:text-[4px]  xl:text-[4.5px] ">
                    <Dshboard></Dshboard>
                    <Outlet></Outlet>
              </div>
        </div>
    )
}

