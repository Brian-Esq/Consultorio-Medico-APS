import axios from 'axios';

export interface CitaMedica {
    id: number;
    fecha: string;
    hora: string;
    TipoCita: string;
    Asistencia: boolean;
    Paciente: string;
    Empleado: string;
}

export const getCitas = async (): Promise<CitaMedica[]> => {
    const response = await axios.get<CitaMedica[]>('URL_DE_TU_BACKEND/citas');
    return response.data;
};