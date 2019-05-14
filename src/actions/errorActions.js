import { MOSTRAR_ERROR } from './types';

export const showError = (estado) => {
    return {
        type: MOSTRAR_ERROR,
        payload: estado,
    }
}