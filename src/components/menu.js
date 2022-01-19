import Product from './product';
import styles from './menu.module.css';

export default function Menu({ menu }) {
  return (
    <div>
      {menu.map((product) => (
        <div className={styles.product}>
          <Product key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
}
