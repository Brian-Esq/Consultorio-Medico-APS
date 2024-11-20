import axios from "axios";

export interface Expediente {
    PacId: number,
    Altura: number,
    Peso: number,
    Alergias: string,
    Genero: string,
    Padecimientos: string[]
}

//Para pruebas básicas y que no truene la app
export const getExpedientesArray = () => {
    const expedientes: Expediente[] = [
        {
            PacId: 1,
            Altura: 1.80,
            Peso: 77,
            Alergias: "Paracetamol, Piña",
            Genero: "Hombre",
            Padecimientos: ["Gripe", "Dolores de Cabeza"]
        },
        {
            PacId: 2,
            Altura: 1.50,
            Peso: 60,
            Alergias: "Cambios climáticos",
            Genero: "Mujer",
            Padecimientos: ["Fractura", "Irritamiento estomacal"]
        },
    ]

    return expedientes;
}

export const getExpedientes = async (): Promise<Expediente[]> => {
    const response = await axios.get<Expediente[]>('https://localhost:7215/api/Expediente');
    return response.data;
};

export const getExpediente = async (id:number): Promise<Expediente> => {
    const response = await axios.get<Expediente>(`https://localhost:7215/api/Expediente/${id}`);
    return response.data;
};