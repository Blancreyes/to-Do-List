import React, {useState} from "react";

const Home = () =>{

    // Recibe la información ingresada en la barra input. 
    const [entry, setEntry] = useState("");

    // Almacena la información que se ingresa en el input
    const [arrayEntry, setArrayEntry] = useState([]);
    
    console.log(entry);
    console.log(arrayEntry);

    // función que me permite pasar la información recibida en el input, al array de tareas
    const addToDoToList = () => {
        setArrayEntry([...arrayEntry,entry])
        setEntry("")
        
    }

    // Función que me permite eliminar una tarea del array 
    const deleteTask = (filteredTasks) =>{
        const filteredArray = arrayEntry.filter((entry) => entry !== filteredTasks)
        setArrayEntry(filteredArray)
    }

    return (

        <>        
        <div class="container col-6">

            <div class="input-group mb-3 my-4">
                <input 
                    type="text" 
                    class="form-control" 
                    id="toDoInputs"
                    placeholder="Enter Activity To Do" 
                    aria-label="To Do's" 
                    aria-describedby="basic-addon2" 
                    onChange={(e) => setEntry(e.target.value)}
                    value={entry} 
                />
                <button
                    class="input-group-text" 
                    id="basic-addon2"
                    onClick={addToDoToList}
                    >Submit
                </button>
            </div>
                    
            <div >
                <ul class="list-group list-group-numbered">{arrayEntry.map ((entry) => 
                    <li class="list-group-item d-flex">
                        <span style={{width:"90%"}}>{entry}</span>
                        <button class="text-align-right"
                            onClick={() => deleteTask(entry)}
                        >Delete</button>
                    </li>)
                    }
                </ul>
            </div>
        
        </div>
    </>
            
    );

}



export default Home;