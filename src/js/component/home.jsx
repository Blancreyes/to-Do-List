import React, { useState } from "react"; 

//create your first component
const Home = () => {
  //2. declaramos los estados por cada input
  const [entry, setEntry] = useState("");
  
  function handleEntry(e) {
    setEntry(e.target.value);
  }

  return (
    <div className="text-center">
      <a href="#" className="btn btn-success" onClick={() => saludar("Noemi")}>
        If you see this green button... bootstrap is working...
      </a>
      <form className="container" onSubmit={enviarDatos}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleEmail}
			value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=> setPassword(e.target.value)}
			value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;