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

//Solo para pruebas básicas y que no truene la app
export const getCitasArray = () =>{
    const citas : CitaMedica[] = [
        {
            id: 1,
            fecha: "2024-10-21",
            hora: "10 am",
            tipoCita: "Consulta",
            asistencia: "No",
            nombrePaciente: "Abraham",
            nombreEmpleado: "Cassian",
            aPaternoEmpleado: "Andor",
            aMaternoEmpleado: "Skywal",
            aPaternoPaciente: "Lincoln",
            aMaternoPaciente: "Pérez",
        },
        {
            id: 2,
            fecha: "2024-10-22",
            hora: "1 pm",
            tipoCita: "Operación",
            asistencia: "No",
            nombrePaciente: "Daniel",
            nombreEmpleado: "Pedro",
            aPaternoEmpleado: "Picapiedra",
            aMaternoEmpleado: "Romperroca",
            aPaternoPaciente: "Mirelles",
            aMaternoPaciente: "Paredes",
        },
        {
            id: 3,
            fecha: "2024-10-23",
            hora: "4 pm",
            tipoCita: "Revisión",
            asistencia: "No",
            nombrePaciente: "Daniel",
            nombreEmpleado: "Pedro",
            aPaternoEmpleado: "Picapiedra",
            aMaternoEmpleado: "Romperroca",
            aPaternoPaciente: "Mirelles",
            aMaternoPaciente: "Paredes",
        }
    ]

    return citas;
}

export const deleteCita = async (id:number): Promise<void>=>{
    await axios.delete(`https://localhost:7215/api/Cita/${id}`);
}