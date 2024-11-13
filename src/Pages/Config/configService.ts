import axios from 'axios';

export interface DoctorInfo {
    Id: number,
    Nombres: string,
    Apellidos: string,
    CURP: string,
    RFC: string,
    NSS: string,
}

export const getEspecificDoc = async (id: number): Promise<DoctorInfo> => {
    const response = await axios.get<DoctorInfo>('https://localhost:7215/api/Doctor/' + id);
    return response.data;
};