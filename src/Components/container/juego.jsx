import React,{useState,useEffect} from "react";
import ElegirMapa from "../pure/ElegirMapa";
import Map from "../pure/map";
import '../../css/juego.css'
import Buttons from "../pure/Buttons";

const Juego =()=>{
    const [state, setState] = useState([]);
    const [errorCoord, setErrorCoord] = useState("");
    // const up = useKeyPress("ArrowUp");
    // const down = useKeyPress("ArrowDown");
    // const right = useKeyPress("ArrowRight");
    // const left = useKeyPress("ArrowLeft");

    
// // Hook
// function useKeyPress(targetKey) {
//     // State for keeping track of whether key is pressed
//     const [keyPressed, setKeyPressed] = useState(false);
//     // If pressed key is our target key then set to true
//     function downHandler({ key }) {
//       if (key === targetKey) {
//         setKeyPressed(true);
//       }
//     }
//     // If released key is our target key then set to false
//     let cont=0;
//     const upHandler = ({ key }) => {
//       if (key === targetKey) {
//         console.log("entrando");
//         if(targetKey === 'ArrowUp') moveUp();
//         if(targetKey === 'ArrowDown') moveDown();;
//         if(targetKey === 'ArrowRight') moveRight();
//         if(targetKey === 'ArrowLeft')  moveLeft();   
//         }
//         setKeyPressed(false);
      
//     };
//     // Add event listeners
//     useEffect(() => {
//       window.addEventListener("keydown", downHandler);
//       window.addEventListener("keyup", upHandler);
//       // Remove event listeners on cleanup
//       return () => {
//         window.removeEventListener("keydown", downHandler);
//         window.removeEventListener("keyup", upHandler);
//       };
//     }, []); // Empty array ensures that effect is only run on mount and unmount
//     return keyPressed;
//   }
    
    const room1 = [
            [' ', ' ', ' '],
            [' ', ' ', 'm'],
            [' ', ' ', '*'],
            [' ', ' ', ' ']
        ];
    const room2 = [
            ['*', ' ', ' ', ' '],
            [' ', 'm', ' ', ' '],
            [' ', ' ', ' ', ' '],
            [' ', ' ', ' ', '*'],
            [' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' '],
            [' ', ' ', ' ', '*']
          ]

    const rooms = [{map: room1},{map: room2}];


    //Eligiendo cuál mapa jugar
    const clickOnMap = (room) =>{
        setState(room);
    }
    
    //Obteniendo la ubicación de la rata en el mapa
    const locateRat = (state)=>{
        let coord={cheese: 0};
        state.forEach((line,i)=>{
            line.forEach((pix,j)=>{
                if(state[i][j]==='m'){
                    coord = {
                        ...coord,
                        i,
                        j,
                        maxI:state.length-1,
                        maxJ: line.length-1
                    }
                }
                if(state[i][j]==='*'){
                    coord.cheese++
                }
            })
        })
        return coord;
    }
    //movimientos:
    //moviendo la rata hacia arriba
    const moveUp = ()=>{
        const {i,j,cheese} = locateRat(state);
        let newState = [...state];
        if(i-1 >= 0){
            newState[i][j]=' ';
            newState[i-1][j]='m';
            setState(newState);
            setErrorCoord("");
        }else{
            setErrorCoord("La rata no se puede seguir moviendo hacia arriba");
        }
    }

    //moviendo la rata hacia abajo
    const moveDown = ()=>{
        const {i,j,maxI,cheese} = locateRat(state);
        let newState = [...state];
        if(i+1 <= maxI){
            newState[i][j]=' ';
            newState[i+1][j]='m';
            setState(newState);
            setErrorCoord("");
        }else{
            setErrorCoord("La rata no se puede seguir moviendo hacia abajo");
        }
    }

    //moviendo la rata hacia la derecha
    const moveRight = ()=>{
        const {i,j,maxJ,cheese} = locateRat(state);
        let newState = [...state];
        if(j+1 <= maxJ){
            newState[i][j]=' ';
            newState[i][j+1]='m';
            setState(newState);
            setErrorCoord("");
        }else{
            setErrorCoord("La rata no se puede seguir moviendo a la derecha");
        }
    }

    //moviendo la rata hacia la izquierda
    const moveLeft = ()=>{
        const {i,j,cheese} = locateRat(state);
        let newState = [...state];
        if(j-1 >= 0){
            newState[i][j]=' ';
            newState[i][j-1]='m';
            setState(newState);
            setErrorCoord("");
        }else{
            setErrorCoord("La rata no se puede seguir moviendo a la izquierda");
        }
    }

    const eatCheese = (i,j)=> state[i][j] === "*" ? true : false;
    const resetState = ()=>{setState([])}

    return(
        <div id="App" >
        {
            //Menú para elegir el mapa
            state.length===0 
            ?
            <ElegirMapa rooms={rooms} onClick={clickOnMap}></ElegirMapa>
            :
            //Hemos elegido un mapa ahora lo mostramos, junto con su funcionalidad de botones
            <>  
                <Map room={state} onClick={()=>{}}></Map>  
                <>
                    {
                        errorCoord.length>0 && <p>{errorCoord}</p>
                    }
                </>        
                {/* Mostrando los botones de juego */}
                <Buttons moveUp={moveUp} moveDown={moveDown} moveRight={moveRight} moveLeft={moveLeft}/>
                <button onClick={resetState} className="volver"> ← volver</button>
            </>
        }
        </div>
    )
}
export default Juego;









