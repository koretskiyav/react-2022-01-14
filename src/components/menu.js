import Product from './product';
import Restaurant from './restaurant';

export default function Menu({ menu }) {
  return (
    <div>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
