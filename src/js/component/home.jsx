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

    
    return (

        <>        
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
    </>
            
    );

}



export default Home;