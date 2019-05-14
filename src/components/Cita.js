import React, { Component } from 'react'
import PropTypes from 'prop-types';

import citasReducer from '../reducers/citasReducer';

// Redux
import { connect } from 'react-redux';
import { borrarCita } from '../actions/citasActions';

class Cita extends Component {

    eliminarCita = () => {
        console.log(this.props);
        this.props.borrarCita(this.props.cita.id);
    }

    render() {
        const { fecha, hora, mascota, propietario, sintomas } = this.props.cita;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">Nombre Mascota: {mascota}</h3>
                    <p className="card-text"> <span>Nombre del Dueño: </span> {propietario} </p>
                    <p className="card-text"> <span>Fecha: </span> {fecha}</p>
                    <p className="card-text"> <span>Hora: </span> {hora}</p>
                    <p className="card-text"> <span>Síntomas: </span> </p>
                    <p className="card-text">{sintomas}</p>
                    <button onClick={this.eliminarCita} className="btn btn-danger">Borrar &times;</button>
                </div>
            </div>
        );
    }
}

Cita.propTypes = {
    cita: PropTypes.shape({
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        nombreMascota: PropTypes.string.isRequired,
        propietario: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
    eliminarCita: PropTypes.func.isRequired,
}

export default connect(null, { borrarCita })(Cita);