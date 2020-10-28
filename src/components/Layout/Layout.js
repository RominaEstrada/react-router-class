import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mt-3">
        {children}
      </div>
      <Footer />
    </>
  );
}
 
export default Layout;