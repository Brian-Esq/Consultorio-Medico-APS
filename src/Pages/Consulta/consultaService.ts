import axios from "axios";

export interface ConsultaInt {
    ComGenerales: string;
    Costo: number;
}

interface Prescription {
    padecimiento: string;
    tratamiento: string;
    duracion: string;
    comentarios: string;
}

export const finishConsulta = async (cita_Id: number, procedimiento: string, costo: number, comentarios: string, detalles: Prescription[]): Promise<void> => {
    const url = 'https://localhost:7215/api/Consulta/ConsultaYDetalle'; // Replace with your backend API URL
        const consulta = {cita_Id,procedimiento,costo,comentarios}
        const data = {
            consulta,
            detalles
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Success:', responseData);
        } catch (error) {
            console.error('Error:', error);
        }
}