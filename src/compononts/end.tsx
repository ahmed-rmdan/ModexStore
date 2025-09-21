
import React from "react";
import { NavLink } from "react-router-dom";
import githublogo from '/SOCIAL MEDIA/GitHub_Invertocat_Logo.svg.png'
import linkedlogo from '/SOCIAL MEDIA/linkdin.png'
import youtubelogo from '/SOCIAL MEDIA/YouTube_full-color_icon_(2024).svg.png'
export const End:React.FC<{}>=()=>{
    return(<>
    <section className="flex flex-col items-center justify-center gap-[2%] w-full h-[120px] sm:h-[190px] bg-purple-800
     text-white text-[0.65em] md:text-[1em] xl:text-[1.2em]  ">
        <div className="flex flex-row font-semibold items-center justify-around w-full h-[55px] md:h-[60px] " >
                <NavLink to='/aboutus' className={'hover:underline'} >About Us</NavLink>
         <NavLink to='/terms' className={'hover:underline'}>Term&Conditions</NavLink>
         <NavLink to={'/contact'} className=" cursor-pointer hover:underline" >Contact Us</NavLink>
        </div>
       <div className="flex flex-col w-full items-center justify-center gap-[19%] h-[100px]">
           <h2 className="underline font-bold text-[1.6em]">Contact ME</h2>
              <div className=" min-w-[35%] max-w-[35%] h-[35%] flex flex-row  items-center gap-[8%] justify-around  ">
                      <a href="https://github.com/ahmed-rmdan" className="min-w-[18%] max-w-[18%] min-h-full max-h-full relative "> 
                       <img alt="github-logo"   className=" absolute min-w-full max-w-full min-h-full max-h-full "  
                       src={githublogo}>
                         </img> 
                         
                            </a>
                            <a href="https://www.linkedin.com/in/ahmed-ramadan-63a4272b9/" className="min-w-[18%] max-w-[18%] min-h-full max-h-full relative ">
                              <img   alt='linkdin-logo' src={linkedlogo} className=" absolute min-w-full max-w-full min-h-full max-h-full ">
                              </img>   
                               </a>

                             <a href="https://www.youtube.com/@ahmedrmadan2406 " className="min-w-[16%] max-w-[16%] min-h-full max-h-full relative  ">  
                             <img alt="youtube-logo" src={youtubelogo} className="  absolute min-w-full max-w-full min-h-full max-h-full">
                             </img>   
                              </a> 
               </div>

       </div>
   
    </section>


     <section className="flex flex-row items-center  justify-around font-semibold bg-black h-[35px] sm:h-[50px] text-[9.5px] sm:text-[16px] text-white">
                  <p>modexstore.netlify.app@2025</p>
                  <p>ahmedrmadan251998@gmail.com</p>
                  
         </section>
    </>
        


    )
}