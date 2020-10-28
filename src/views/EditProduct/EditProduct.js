import { useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import { useHistory } from 'react-router-dom';

const EditProduct = ({ match }) => {
  const [product, setProduct] = useState({
    name: '',
    price: ''
  })
  const { name, price } = product;
  const idProduct = match.params.id;
  const history = useHistory();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await clienteAxios.get(`/productos/${idProduct}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error.response)
      }
    }
    getProductById();
  }, []);

  const handleOnChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault();
    try {
      await clienteAxios.put(`/productos/${idProduct}`, product);
      history.push('/');
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
                        </h2>
            <form
              onSubmit={handleOnSubmit}
            >
              <div className="form-group">
                <label>Nombre del producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="name"
                  value={name}
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Precio del producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio producto"
                  name="price"
                  value={price}
                  onChange={handleOnChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Guardar cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default EditProduct;