import axios from 'axios';

export interface Paciente {
    Nombres: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    NumTelefono: string;
    Correo: string;
    fechaNacimiento: string;
}

export const getPerfil = async () => {
    const res = await axios.get(`http://localhost:3001/pacientes/pacienteesp`);
    return res.data;
}

export const putPerfil = async (patInfo: Paciente) => {
    try {
        const res = await axios.put(`http://localhost:3001/pacientes/pacienteesp`, patInfo);

        if (res.status >= 200 && res.status < 300) {
            console.log('Success:', res.statusText);
        } else {
            console.error('Error: Network response was not ok', res.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}