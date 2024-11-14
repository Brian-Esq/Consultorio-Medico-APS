import './inventario.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ElementoEspecifico from '../../Componentes/ElementoInvEspecifico/elementoInvEspecifico';
import { ElementoInfo, getEspecificElement, postElement } from './inventarioService';


function Inventario() {
    const [addNewElement, setAddNewElement] = useState(false);
    const [elementoName, setElementoName] = useState('');
    const [elementoCant, setElementCantidad] = useState('');
    const [ID, setID] = useState('');
    const [elemento, setElemento] = useState<ElementoInfo | null>(null);
    const [searchElement, setSearchElement] = useState(false);
    const [elementos, setElementos] = useState<ElementoInfo[]>([]);
    const [nextId, setNextId] = useState(1); // Initial ID

    const handleAddElement = () => {
        setAddNewElement(!addNewElement);
        setElementoName('');
        setElementCantidad('');
    }

    const handleFinishAdding = () => {
        if (elementoName && elementoCant) {
            const newElement: ElementoInfo = {
                Id: nextId,
                Nombre: elementoName,
                Cantidad: 0,
                Activo: true,
            };
            setElementos([...elementos, newElement]);
            setNextId(nextId + 1); // Increment the ID for the next element
            alert('Elemento agregado exitosamente \n\n Datos: \n\nID: ' + nextId + '\n' + elementoName + '\n' + elementoCant);
            setAddNewElement(false);
            setElementoName('');
            setElementCantidad('');
        } else {
            alert('Por favor llene todos los campos');
        }
    }

    const handleSearchElementID = () => {
        if (ID) {
            let IDInt = parseInt(ID)
            const filterElement = elementos.find(e => e.Id === IDInt);
            if (filterElement) {
                setElemento(filterElement);
                setID('');
            } else {
                alert('Elemento no encontrado');
                setID('');
                setElemento(null);
            }
        } else {
            alert('Ingrese un valor válido de búsqueda por ID');
            setID('');
        }
    }

    const handleSearchElement = () => {
        setSearchElement(!searchElement);
        setID('');
        setElemento(null);
    }

    const handleSuspendElement = () => {
        if (elemento) {
            /*Cambiar a que solo filtre el elemento que se busca suspender para luego mandar al método putElement
            Usar lo siguiente cuando esté conectado al backend:

            const espElement = elementos.filter(e => e.Id === e.Id);
            espElement[0].Activo = false;
            putElement(espElement[0]);
            */
            const espElement = elementos.filter(e => e.Id !== elemento.Id);
            setElementos(espElement);

            //Apartir de esto no reemplazar
            setElemento(null);
            alert('Elemento retirado exitosamente');
        } else {
            alert('No se ha seleccionado un elemento para suspender');
        }
    }

    return (
        <Container className='inventarioPage'>
            <Row className='inventarioTitleRow'>
                <Col>
                    <h1 className='invTitle'>Inventario</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='addElementCol'>
                    {!addNewElement ? (
                        <>
                            <Row className='selElBotRow'>
                                <Col>
                                    <p>Seleccione el botón para agregar un nuevo elemento</p>
                                </Col>
                            </Row>
                            <Row className='botRowInv'>
                                <Col>
                                    <button className='addElementBot' onClick={handleAddElement}>Agregar Elemento</button>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row className='inventoryRow'>
                                <Col>
                                    <h3 className='inventorySubtitle'>Agregar Elemento</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='invFields'>
                                    <label className='invText'>Nombre: </label>
                                </Col>
                                <Col>
                                    <input name='ElmName'
                                        autoComplete='off'
                                        className='inputElmInv'
                                        value={elementoName}
                                        required
                                        onChange={(e) => setElementoName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='invFields'>
                                    <label className='invText'>Cantidad: </label>
                                </Col>
                                <Col>
                                    <input name='ElmName'
                                        autoComplete='off'
                                        className='inputElmInv'
                                        value={elementoCant}
                                        required
                                        onChange={(e) => setElementCantidad(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Row className='botRowInv'>
                                <Col>
                                    <button className='canAddElementBot' onClick={handleAddElement}>Cancelar</button>
                                </Col>
                                <Col>
                                    <button className='finishAddElmBot' onClick={handleFinishAdding}>Agregar</button>
                                </Col>
                            </Row>
                        </>
                    )}
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='addElementCol'>
                    {searchElement ? (
                        <>
                            <Row className='inventoryRow'>
                                <Col>
                                    <h3 className='inventorySearchSubtitle'>Buscar Elemento</h3>
                                </Col>
                            </Row>
                            <Row className='insertElementRow'>
                                <Col xs={0} md={1}></Col>
                                <Col xs={12} md={10}>
                                    <Row>
                                        <Col>
                                            <label className='insertElementText'>Ingrese el ID del elemento: </label>
                                            <input name='InputDeElemento'
                                                autoComplete='off'
                                                className='inputElementID'
                                                value={ID}
                                                onChange={(e) => setID(e.target.value.replace(/\D/, ''))} // Reemplaza cualquier carácter no numérico
                                                pattern='[0-9]*'
                                                inputMode='numeric'
                                            />
                                        </Col >
                                    </Row>
                                    <Row>
                                        <Col>
                                            <button className='searchElmBut' type='button' onClick={handleSearchElementID}>Buscar</button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row>
                                <Col xs={0} md={1}></Col>
                                <Col xs={12} md={10}>
                                    {elemento ? (
                                        <ElementoEspecifico
                                            Id={elemento.Id}
                                            Nombre={elemento.Nombre}
                                            Cantidad={elemento.Cantidad}
                                            Activo={elemento.Activo}
                                        />
                                    ) : (
                                        <p className='elementNotFoundText'>Ingrese el ID de un elemento existente para encontrar un expediente</p>
                                    )}
                                </Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row className='botRowInv'>
                                <Col>
                                    <button className='canAddElementBot' onClick={handleSearchElement}>Cancelar</button>
                                </Col>
                                <Col>
                                    <button className='suspElementBot' onClick={handleSuspendElement}>Retirar</button>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row className='selElBotRow'>
                                <Col>
                                    <p>Seleccione el botón para buscar un elemento por ID</p>
                                </Col>
                            </Row>
                            <Row className='botRowInv'>
                                <Col>
                                    <button className='addElementBot' onClick={handleSearchElement}>Buscar Elemento</button>
                                </Col>
                            </Row>
                        </>
                    )}

                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
        </Container>
    );
}

export default Inventario;