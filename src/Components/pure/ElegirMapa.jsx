import React from 'react';
import Map from './map';
import '../../css/ElegirMapa.css'; 

const ElegirMapa = ({rooms,onClick}) => {
    return (
        <div>
            <h1>Elegir Mapa:</h1>
            {
                <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"2em",marginBottom:"2em"}}>
                {
                rooms.map((room,index)=>{
                    return <div key={index} className="map"><Map  room={room.map} key={index} onClick={onClick}></Map></div>
                })}
                </div>
            }
        </div>
    );
}

export default ElegirMapa;
