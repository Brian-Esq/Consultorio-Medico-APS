import axios from 'axios';

export interface ElementoInfo {
    Id: number,
    Nombre: string,
    Cantidad: number,
    Activo: boolean,
}

export const getEspecificElement = async (id: number): Promise<ElementoInfo> => {
    const response = await axios.get<ElementoInfo>('https://localhost:7215/api/Doctor/' + id);
    return response.data;
};

export const postElement = async (elemento: ElementoInfo): Promise<void> => {
    try {
        const response = await axios.post('https://localhost:7215/api/Inventario', elemento);

        if (response.status >= 200 && response.status < 300) {
            console.log('Success:', response.statusText);
        } else {
            console.error('Error: Network response was not ok', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export const putElement = async (elemento: ElementoInfo): Promise<void> => {
    try {
        const response = await axios.put('https://localhost:7215/api/Inventario/' + elemento.Id, elemento);

        if (response.status >= 200 && response.status < 300) {
            console.log('Success:', response.statusText);
        } else {
            console.error('Error: Network response was not ok', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}