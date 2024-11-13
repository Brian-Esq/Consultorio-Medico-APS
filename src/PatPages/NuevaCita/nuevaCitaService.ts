import axios from "axios";

export interface FechaYHora{
    fecha: string;
    hora: string[];
}

export interface CitasDisp {
    FechaYHora: FechaYHora[];
    doctor: string;
}

export interface TiposDeCita{
    tipo: string;
}

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

//Solo para pruebas básicas sin backend y que no truene la app
export const getCitasDispArray = () =>{
    const citasDisp : CitasDisp[] = [
        {
            FechaYHora: [
                {
                    fecha: "2024-10-15",
                    hora: ["10:00", "11:00", "14:00"]
                },
                {
                    fecha: "2024-10-16",
                    hora: ["13:00", "16:00", "18:00"]
                },
                {
                    fecha: "2024-10-17",
                    hora: ["8:00", "12:00", "15:00"]
                }
            ],
            doctor: "Dr. Pérez"
        },
        {
            FechaYHora: [
                {
                    fecha: "2024-10-18",
                    hora: ["9:00", "10:00", "11:00"]
                },
                {
                    fecha: "2024-10-19",
                    hora: ["8:00", "9:00", "10:00"]
                },
                {
                    fecha: "2024-10-20",
                    hora: ["9:00", "10:00", "11:00"]
                }
            ],
            doctor: "Dr. Sánchez"
        },
        {
            FechaYHora: [
                {
                    fecha: "2024-10-21",
                    hora: ["9:00", "10:00", "11:00"]
                },
                {
                    fecha: "2024-10-22",
                    hora: ["8:00", "9:00", "10:00"]
                },
                {
                    fecha: "2024-10-23",
                    hora: ["9:00", "10:00", "11:00"]
                }
            ],
            doctor: "Dr. Carmin"
        }
    ]
    return citasDisp;
}

export const getTiposCita = () =>{
    const tiposCita : TiposDeCita[] = [
        {
            tipo: "Consulta"
        },
        {
            tipo: "Examen"
        },
        {
            tipo: "Operación"
        }
    ]
    return tiposCita;
}


//Para conexión con el backend
export const getDoctores = async (): Promise<string[]> => {
    const response = await axios.get<string[]>('https://localhost:7215/api/Doctor');
    return response.data;
}

export const getProcedimientos = async (): Promise<string[]> => {
    const response = await axios.get<string[]>('https://localhost:7215/api/Procedimiento');
    return response.data;
}

export const getHorarios = async (doctor: string, fecha: string): Promise<string[]> => {
    const response = await axios.get<string[]>('https://localhost:7215/api/Doctor/' + doctor + '/' + fecha);
    return response.data;
}

export const postCita = async (doctor: string, tipoCita: string, fecha: string, hora: string): Promise<void> => {
    const cita: CitaMedica = {
        id: 0,
        fecha: fecha,
        hora: hora,
        tipoCita: tipoCita,
        asistencia: "",
        nombrePaciente: "",
        nombreEmpleado: doctor,
        aPaternoEmpleado: "",
        aMaternoEmpleado: "",
        aPaternoPaciente: "",
        aMaternoPaciente: ""
    }
    
    try {
        const response = await axios.post('https://localhost:7215/api/Cita', cita);

        if (response.status >= 200 && response.status < 300) {
            console.log('Success:', response.statusText);
        } else {
            console.error('Error: Network response was not ok', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}