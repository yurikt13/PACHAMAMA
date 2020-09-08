import React from 'react';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        <table>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Celular</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>Andrés Felipe</td>
              <td>Orozco Cano</td>
              <td>andresfelipeorozcocano@gmail.com</td>
              <td>3225846165</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>Liceth Johana</td>
              <td>Becerra Pérez</td>
              <td>licethperezjk@gmail.com</td>
              <td>3014659876</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>Ronaldo Andrés</td>
              <td>Bautista Ruíz</td>
              <td>ronaldoandres1124@gmail.com</td>
              <td>3007775781</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>Yuri Alejandra</td>
              <td>Monroy Bautista</td>
              <td>bangtantaejunk@gmail.com</td>
              <td>3103604115</td>
            </tr>
          </thead>
        </table>
      </div>
      <Header />
    </div>
  );
}

export default App;
