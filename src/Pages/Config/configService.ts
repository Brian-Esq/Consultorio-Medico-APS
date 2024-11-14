import axios from 'axios';

export interface DoctorInfo {
    Id: number,
    Nombres: string,
    Apellidos: string,
    CURP: string,
    RFC: string,
    NSS: string,
    Activo: boolean,
}

export interface TiposDeCita{
    id:number;
    descripcion: string;
}

export const getEspecificDoc = async (id: number): Promise<DoctorInfo> => {
    const response = await axios.get<DoctorInfo>('https://localhost:7215/api/Doctor/' + id);
    return response.data;
};

export const postDoctor = async (doctor: DoctorInfo): Promise<void> => {
    try {
        const response = await axios.post('https://localhost:7215/api/Doctor', doctor);

        if (response.status >= 200 && response.status < 300) {
            console.log('Success:', response.statusText);
        } else {
            console.error('Error: Network response was not ok', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export const putDoctor = async (doctor: DoctorInfo): Promise<void> => {
    try {
        const response = await axios.put('https://localhost:7215/api/Doctor/' + doctor.Id, doctor);

        if (response.status >= 200 && response.status < 300) {
            console.log('Success:', response.statusText);
        } else {
            console.error('Error: Network response was not ok', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}