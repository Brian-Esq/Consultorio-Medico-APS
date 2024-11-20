import axios from 'axios';

export interface Paciente {
    id:number;
    nombre: string;
    aPaterno: string;
    aMaterno: string;
    numTelefono: string;
    fechaNac: string;
    correo: string;
    historialMed:string;
    usuario:string;
    contraseña:string;
    status:boolean;
}

export const getPerfil = async (id:number) => {
    const res = await axios.get(`https://localhost:7215/api/Paciente/${id}`);
    return res.data;
}

export const putPerfil = async (patInfo: Paciente) => {
    try {
        const res = await axios.put(`https://localhost:7215/api/Paciente/${patInfo.id}`, patInfo);

        if (res.status >= 200 && res.status < 300) {
            console.log('Success:', res.statusText);
        } else {
            console.error('Error: Network response was not ok', res.status);
        }
        return res;
    } catch (error) {
        console.error('Error:', error);
    }
}