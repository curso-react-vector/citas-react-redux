import React, { Component } from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';

class AgregarCita extends Component {

    // Refs
    nombreMascotaRef = React.createRef();
    propietarioMascotaRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();

    state = {
        error: false,
    }

    crearNuevaCita = (e) => {
        e.preventDefault();

        const cita = {
            id: uuid(),
            nombreMascota: this.nombreMascotaRef.current.value,
            propietario: this.propietarioMascotaRef.current.value,
            fecha: this.fechaRef.current.value,
            hora: this.horaRef.current.value,
            sintomas: this.sintomasRef.current.value,
        }

        if (cita.nombreMascota === '' || cita.propietario === '' || cita.fecha === '' || cita.hora === '' || cita.sintomas === '') {
            console.log('Faltan campos');
            this.setState({
                error: true,
            })
        } else {
            this.setState({
                error: false,
            })
            this.props.crearCita(cita);
            e.currentTarget.reset();
        }
    }

    render() {
        const error = this.state.error;
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5"> Agrega las citas aquí</h2>
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.propietarioMascotaRef} type="text" className="form-control" placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.fechaRef} type="date" className="form-control" />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.horaRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {error ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
                </div>
            </div>
        );
    }
}

AgregarCita.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default AgregarCita;