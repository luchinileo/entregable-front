import React, {useState , useEffect} from "react";


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











    const [nuevaPersona, setNuevaPersona] = useState({
        nombre:"",
        apellido:"",
        nacionalidad:""
    })
     const manejarDatos=(event)=>{
        
        setNuevaPersona({
            ...nuevaPersona,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value
        })
       
       
     }
  
  
    const enviarDatos = (event) =>{
        event.preventDefault()
        console.log(nuevaPersona)
      
    }

    return (
        <div className="container-list">
        
        <h1>Listado de Personas</h1>
        <ul className="name-list">
            {personas.map((persona,index) =>(
                <li key={index}>{persona.nombre} - {persona.apellido} - {persona.nacionalidad}</li>
                ))}
        </ul>
        <form onSubmit={enviarDatos}>
         <div> 
            <label className="input">Nombre</label>
        <input
         type="text"
         name="nombre"
         onChange={manejarDatos}
         placeholder="Nombre" />
         </div> 
         <div>
         <label className="input">Apellido</label>
        <input
         type="text"
         name="apellido"
         onChange={manejarDatos}
         placeholder="Apellido" />
         </div> 
         <div>
         <label className="input">Nacionalidad</label>
        <input
         type="text"
         name='nacionalidad'
         onChange={manejarDatos}
         placeholder="Nacionalidad" />
         </div>
        <button className="btn" type="submit">agregar personas</button>
   
        </form>
         </div>
    )
}
export default Lista