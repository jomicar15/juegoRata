import React from 'react';
import '../../css/map.css';
// import ratImg from '../../img/rata.png';
import ratImg from '../../img/rata-imagen-animada-0091.gif';
import cheeseImg from '../../img/queso.png';


const Map = ({room,onClick}) => {

    const printImg =(pixel,index)=>{
        if(pixel === "m"){
            return <img src={ratImg} key={index} alt="rat" className='img' width={"130px"}></img>
        }
        if(pixel === "*"){
            return <img src={cheeseImg} key={index} alt="cheese" className='img'></img>
        }
        return pixel;
    }


    return (
        <div>
            {
                room.map((line,i)=>{
                    return (<div key={i} className="line" onClick={(ev)=>{onClick(room)}}>
                        {
                            (line.map((pixel,index)=>{
                                return pixel===" " ? <p key={index} className='pix'>{printImg(pixel,index)}</p> : printImg(pixel,index)
                            }))
                        }
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Map;
