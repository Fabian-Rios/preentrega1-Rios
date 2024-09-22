import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const BaseLayout = ({ children }) => {
    return (
    <>
    <Navbar/>
    <main>
        { children }
    </main>
    <Footer/>
    </>
);
};
export default BaseLayout;