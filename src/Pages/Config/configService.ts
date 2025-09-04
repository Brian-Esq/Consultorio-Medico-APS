import axios from 'axios';

export interface DoctorInfo {
    id: number,
    nombre: string,
    aPaterno: string,
    aMaterno: string,
    curp: string,
    rfc: string,
    numSeguro: string,
    status: boolean,
    correo: string,
    contraseña: string
}

export interface TiposDeCita{
    id:number;
    descripcion: string;
}

export const getEspecificDoc = async (id: number): Promise<DoctorInfo> => {
    const response = await axios.get<DoctorInfo>('https://localhost:7215/api/Empleado/' + id);
    return response.data;
};

export const postDoctor = async (doctor: DoctorInfo): Promise<boolean> => {
    try {
        const response = await axios.post('https://localhost:7215/api/Empleado', doctor);

        if (response.status >= 200 && response.status < 300) {
            console.log('Success:', response.statusText);
            return true;
        } else {
            console.error('Error: Network response was not ok', response.status);
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

export const putDoctor = async (doctor: DoctorInfo): Promise<boolean> => {
    try {
        const response = await axios.put('https://localhost:7215/api/Empleado/' + doctor.id, doctor);

        if (response.status >= 200 && response.status < 300) {
            console.log('Success:', response.statusText);
            return true;
        } else {
            console.error('Error: Network response was not ok', response.status);
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}