import ItemList from "../../components/ItemList";

const itemsMock = [
    { id:1, name:'AMD Ryzen 7',img:'/img/AMD ryzen 7.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 8, Zócalos compatibles: AM4, Generación: 7°, Frecuencia máxima de reloj: 4.3 GHz' },
    { id:2, name:'Intel I5',img:'/img/intel-core-i5.jpg',description:'Tipos de memoria RAM soportadas: DDR4, Cantidad de núcleos de CPU: 6, Zócalos compatibles: FCLGA1200, Generación: 10°, Frecuencia máxima de reloj: 4.3 GHz' },
    { id:3, name:'Video ASUS RTX 4060Ti',img:'/img/placa de video asus rtx 4060Ti.jpg',description:'Fabricante: Nvidia, Tipo de memoria gráfica: GDDR6, Interfaz con la placa madre: PCI-Express 4.0, Tamaño de memoria: 8 GB, Contectividad: DisplayPort, HDMI' },

]

const Home = () => {

    return <> 
    
    <h2>INICIO</h2> 
    <ItemList items={itemsMock}/>
    </>

};

export default Home

