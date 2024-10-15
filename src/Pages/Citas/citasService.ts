import axios from 'axios';

export interface CitaMedica {
    id: number;
    fecha: string;
    hora: string;
    tipoCita: string;
    asistencia: string;
    nombrePaciente: string;
    nombreEmpleado: string;
    aPaternoEmpleado: string;
    aMaternoEmpleado: string;
    aPaternoPaciente: string;
    aMaternoPaciente: string;

}

export const getCitas = async (): Promise<CitaMedica[]> => {
    const response = await axios.get<CitaMedica[]>('https://localhost:7215/api/Cita');
    return response.data;
};

export const deleteCita = async (id:number): Promise<void>=>{
    await axios.delete(`https://localhost:7215/api/Cita/${id}`);
}