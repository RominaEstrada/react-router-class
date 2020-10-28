import { useState, useEffect } from 'react';
import clienteAxios from '../../config/axios';
import Product from '../../components/Product/Product';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {
      try {
        const response = await clienteAxios.get('/productos');
        setProducts(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <h2 className="text-center my-5">Listado de productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">
              Nombre
            </th>
            <th scope="col">
              Precio
            </th>
            <th scope="col">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {
            products.length === 0 ? 'No hay productos' : (
              products.map(product => (
                <Product key={product.id} product={product} />
              ))
            )
          }
        </tbody>
      </table>
    </>
  );
}
 
export default Products;