import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');

    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }


  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];
    console.log(citas);
    this.setState({
      citas
    })
  }

  eliminarCita = (id) => {
    // Leer el state
    const citasActuales = [...this.state.citas];

    // Borrar el elemento del State
    const citas = citasActuales.filter(cita => cita.id !== id);

    // Actualiazar el State
    this.setState({
      citas
    })
  }


  render() {
    return (
      <div className="container">
        <Header titulo={'Administrador de pacientes de veterinaria'} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita} />
          </div>
        </div>
      </div>
    );
  }
}



export default App;
