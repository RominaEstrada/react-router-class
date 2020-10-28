import { useHistory } from 'react-router-dom'

const Product = ({ product }) => {

  const { name, price, id } = product;
  const history = useHistory();
  
  const redirectToEditProduct = () => {
    history.push(`/productos/editar/${id}`)
  }


  return (
    <tr>
      <td>{name}</td>
      <td><span className="font-weight-bold">{price}</span></td>
      <td>
        <button type="button" className="btn btn-primary mr-2" onClick={() => redirectToEditProduct()}>
          Editar
        </button>
      </td>
    </tr>
  );
}
 
export default Product;