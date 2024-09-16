import Navbar from '../components/Navbar'

const BaseLayout = ({ children }) => {
    return (
    <> 
    <Navbar />
    <main>
        { children }
    </main>
    <footer>
        
    </footer>
    </>
);
};
export default BaseLayout;