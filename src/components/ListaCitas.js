import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getCitas } from '../actions/citasActions';

import store from '../store';
store.subscribe(() => {
    localStorage.setItem('citas', JSON.stringify(store.getState()));
})

class ListaCitas extends Component {
    state = {}

    componentDidMount() {
        this.props.getCitas();
    }

    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas'
            : 'Administra tus citas aquí';
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {Object.keys(citas).map(key => (
                            <Cita key={key} cita={citas[key]} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    citas: state.citas.citas,
})

export default connect(mapStateToProps, { getCitas })(ListaCitas);