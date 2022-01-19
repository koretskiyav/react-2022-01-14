import Product from './product';

export default function Menu({ menu, isVisible }) {

  return isVisible ? (
    <div>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  ) : ('');
}
