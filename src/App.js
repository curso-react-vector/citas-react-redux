import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';

// Redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

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

  // eliminarCita = (id) => {
  //   // Leer el state
  //   const citasActuales = [...this.state.citas];

  //   // Borrar el elemento del State
  //   const citas = citasActuales.filter(cita => cita.id !== id);

  //   // Actualiazar el State
  //   this.setState({
  //     citas
  //   })
  // }


  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header titulo={'Administrador de pacientes de veterinaria'} />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita />
            </div>
            <div className="col-md-6">
              <ListaCitas eliminarCita={this.eliminarCita} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}



export default App;
