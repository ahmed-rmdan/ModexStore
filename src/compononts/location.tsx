import React from "react";
import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet'
import { useInView } from "react-intersection-observer";
import { useEffect,useState } from "react";
import {motion} from 'framer-motion'
export const Location:React.FC<{location:[number,number]}>=(props)=>{
const {ref,inView}=useInView({threshold:0.1})
const [anmeopicity,setanmeopicity]=useState(0)
useEffect(()=>{
  if(inView)
  setanmeopicity(100)
  window.addEventListener('scroll',()=>{
if(inView)
  setanmeopicity(100)
  })

},[inView])
  
return(
    <motion.div initial={{opacity:0}} transition={{duration:2.5}} animate={{opacity:anmeopicity}}  ref={ref} className=" flex  flex-col  h-[95%] w-full gap-[20px]">
            <MapContainer className="h-[95%]" center={props.location} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={props.location}>
      <Popup>
        Modex Store Branch
      </Popup>
    </Marker>
  </MapContainer>
     <a className="text-[2.3em] text-center sm:text-[3em] font-bold cursor-pointer hover:underline"  href={`https://www.google.com/maps?q=${props.location[0]},${props.location[1]}`}> Click here to open in google maps</a>
    </motion.div>
)
}