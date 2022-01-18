import Product from './product';

import styles from './menu.module.css';

export default function Menu({menu}) {
    return (
        <section>
            <h2 className={styles.heading}>Menu</h2>
            <div className={styles.products}>
                {/* ??? class name inheritance */}
                {menu.map(product => (
                    <Product className={styles.product} key={product.id} product={product}/>
                ))}
            </div>
        </section>
    );
}