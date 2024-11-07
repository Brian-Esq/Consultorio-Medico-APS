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

//Solo para pruebas básicas y que no truene la app
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