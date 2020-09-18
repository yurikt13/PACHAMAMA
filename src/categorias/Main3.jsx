import React from 'react';
import "./App3.css";

function Main3 () {
    return(
        <>
        <h2>FORMULARIO</h2>
        

        <form>
            
  <div className="form- caco">
    <label for="exampleInputEmail1">Ingrese su usuario</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>

  <div className="form-group sasi">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="papaya">
  <button type="submit" className="btn btn-primary ">Ingresar</button>
  o 
  <button type="submit" className="btn btn-primary ">Ingresar con facebook</button>
   <button type="submit" className="btn btn-primary ">Ingresar con Gmail</button>
   </div>
</form>


        </>
    )

};

export default Main3;