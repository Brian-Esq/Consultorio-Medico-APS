import axios from 'axios';

export interface CitasDisp {
    fecha: string;
    hora: string[];
    doctor: string;
}

//Solo para pruebas básicas y que no truene la app
export const getCitasDispArray = () =>{
    const citasDisp : CitasDisp[] = [
        {
            fecha: "2024-10-21",
            hora: ["10:00", "11:00", "14:00"],
            doctor: "Dr. Pérez"
        },
        {
            fecha: "2024-10-22",
            hora: ["13:00", "16:00", "18:00"],
            doctor: "Dr. Pérez"
        },
        {
            fecha: "2024-10-23",
            hora: ["8:00", "12:00", "15:00"],
            doctor: "Dr. Carmin"
        }
    ]

    return citasDisp;
}