import React from "react";
import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet'

export const Location:React.FC<{location:[number,number]}>=(props)=>{

return(
    <div className=" flex flex-col h-[350px] w-full gap-[20px]">
            <MapContainer className="h-[90%]" center={props.location} zoom={13} scrollWheelZoom={false}>
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
     <a className="text-[2.3em] sm:text-[3em] cursor-pointer hover:underline"  href={`https://www.google.com/maps?q=${props.location[0]},${props.location[1]}`}> Click here to open in google maps</a>
    </div>
)
}