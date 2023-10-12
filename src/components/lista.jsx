import React, {useState , useEffect } from "react";

const Lista = () => {
   
   const [personas, setpersonas] = useState([]);

   useEffect(() => {
     fetch('http://localhost:3001/lista')
     .then(resp => resp.json())
     .then(data => setpersonas(data))
     .catch(error =>{
        console.log('no se pudo obtener las personas',error)
     });
   
   }, [personas]);

   const agregarPersona= ( )=>{
    const data={nombre:"juan" , apellido:"luchini", nacionalidad:"ARGENTINO"}
    fetch('http://localhost:3001/lista',{method:'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify(data)})
    .then(resp => resp.json())
    .then(data => setpersonas([...personas,{data}]))
    .catch(error =>{
       console.log('no se pudo obtener las personas',error)
    });

   }


    return (
        <>
        <div className="container-list">
        
        <h1>Listado de Personas</h1>
        <ul className="name-list">
            {personas.map((persona,index) =>(
                <li key={index}>{persona.nombre} - {persona.apellido} - {persona.nacionalidad}</li>
                ))}
        </ul>
        <button className="" onClick={agregarPersona}>agregar personas</button>
        </div>
        </>
    )
}
export default Lista