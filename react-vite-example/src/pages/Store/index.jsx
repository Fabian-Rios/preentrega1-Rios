import ItemList from "../../components/ItemList";

const itemsMock = [
    { id:1, name:'AMD ryzen 3',img:'/img/AMD ryzen 3.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 4, Zócalos compatibles: AM4, Generación: 3°, Frecuencia máxima de reloj: 4 GHz' },
    { id:2, name:'AMD ryzen 5',img:'/img/AMD ryzen 5.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 6, Zócalos compatibles: AM4, Generación: 4°, Frecuencia máxima de reloj: 4.2 GHz' },
    { id:3, name:'AMD ryzen 7',img:'/img/AMD ryzen 7.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 8, Zócalos compatibles: AM4, Generación: 7°, Frecuencia máxima de reloj: 4.3 GHz' },
    { id:2, name:'AMD ryzen 9',img:'/img/AMD ryzen 9.jpg',description:'Tipos de memoria RAM soportadas: DDR5, Cantidad de núcleos de CPU: 12, Zócalos compatibles: AM4, Generación: 9°, Frecuencia máxima de reloj: 4.8 GHz' },
    { id:2, name:'Intel I3',img:'/img/inte i3.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 4,Zócalos compatibles: FCLGA1200, Generación: 10°, Frecuencia máxima de reloj: 4.3 GHz' },
    { id:2, name:'Intel I5',img:'/img/intel-core-i5.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 6, Zócalos compatibles: FCLGA1200, Generación: 10°, Frecuencia máxima de reloj: 4.3 GHz' },
    { id:2, name:'Intel I7',img:'/img/intel i7.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 8, Zócalos compatibles: FCLGA1200, Generación: 10°, Frecuencia máxima de reloj: 4.8 GHz' },
    { id:2, name:'Intel I9',img:'/img/inte i9.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 10, Zócalos compatibles: FCLGA1200, Generación: 10°, Frecuencia máxima de reloj: 5.2 GHz' },
    { id:2, name:'Disco Solido 960gb',img:'/img/disco solido 960gb..jpg',description:'Capacidad: 960 GB, Interfaces: SATA III, Factor de forma: 2.5, Tecnología de almacenamiento: SSD, Aplicaciones: PC, Desktop ' },
    { id:2, name:'Placa de Video PNY RTX 3060Ti',img:'/img/placa de video pny rtx 3060Ti.jpg',description:'Fabricante: Nvidia, Tipo de memoria gráfica: GDDR6, Interfaz con la placa madre: PCI-Express 4.0, Tamaño de memoria: 12 GB, Contectividad: DisplayPort, HDMI' },
    { id:2, name:'Teclado Gamer Redragon',img:'/img/teclado-gamer redragon.jpg',description:'Es gamer: Sí, Con Bluetooth: No, Tipo de switch: Outemu Red,Idioma: Español Latinoamérica, Color de la retroiluminación: RGB' },
    { id:2, name:'Memoria RAM Fury',img:'/img/memoria ram fury.jfif',description:'Capacidad total: 16 GB, Velocidad: 2666 MHz,Tecnología: DDR4 SDRAM, Es gamer: Sí, Aplicación: Computadoras de escritorio, Formato: UDIMM' },
]

const Store = () => {
    return (
        <div>
            <h2>Tienda</h2>
            <ItemList items={itemsMock}/>
        </div>
    );
};

export default Store;