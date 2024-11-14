import axios from "axios";

export interface TiposDeCita{
    id:number;
    descripcion: string;
}

export interface CitaMedica {
    id: number;
    paciente_Id:number,
    empleado_Id:number,
    fecha: string;
    hora: string;
    tipoCita: number;
    tipoCitaDescripcion: string;
    asistencia: string;
    nombrePaciente: string;
    nombreEmpleado: string;
    aPaternoEmpleado: string;
    aMaternoEmpleado: string;
    aPaternoPaciente: string;
    aMaternoPaciente: string;
    status: boolean;
}

export interface Empleado {
        id:number,
        tipoEmp: string,
        salario: number,
        nombre: string,
        aPaterno: string,
        aMaterno: string,
        curp: string,
        rfc: string,
        numSeguro: string,
        usuario: string,
        contraseña: string,
        status: boolean
}


//Para conexión con el backend
export const getDoctores = async (): Promise<Empleado[]> => {
    const response = await axios.get<Empleado[]>('https://localhost:7215/api/Empleado');
    return response.data;
}

export const getProcedimientos = async (): Promise<TiposDeCita[]> => {
    const response = await axios.get<TiposDeCita[]>('https://localhost:7215/api/TipoDeCita');
    return response.data;
}

export const getHorarios = async (doctor: number, fecha: string): Promise<string[]> => {
    const response = await axios.get<string[]>('https://localhost:7215/api/Empleado/' + doctor + '/' + fecha);
    return response.data;
}

export const postCita = async (doctor: number, tipoCita: number, fecha: string, hora: string): Promise<void> => {
    const cita: CitaMedica = {
        id: 0,
        fecha: fecha,
        hora: hora,
        tipoCita: tipoCita,
        asistencia: "",
        status: true,
        paciente_Id:1,
        empleado_Id:doctor,
        tipoCitaDescripcion: "",
        nombrePaciente: "",
        nombreEmpleado: "",
        aPaternoEmpleado: "",
        aMaternoEmpleado: "",
        aPaternoPaciente: "",
        aMaternoPaciente: "",
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