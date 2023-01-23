import React, {useState} from "react";

const Home = () =>{

    const [entry, setEntry] = useState("");
    const [arrayEntry, setArrayEntry] = useState([]);
    
    console.log(entry);
    console.log(arrayEntry);

    const addToDoToList = () => {
        setArrayEntry([...arrayEntry,entry])
        setEntry("")
        
    }

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