import styles from "../../product/product.module.css";
import Button from "../../button";
import {connect} from "react-redux";
import {decrement, delItem, increment} from "../../../redux/actions";

function BasketItem ({product, decrement, increment, delItem}) {
    return (
        <div className={styles.product}>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.title}>{product.name}</h4>
                    <div className={styles.price}>{product.price} $</div>
                </div>
                <div>
                    <div className={styles.counter}>
                        <div className={styles.count} data-id="product-amount">
                            {product.price} $ x {product.amount} = {product.price * product.amount} $
                        </div>
                        <div className={styles.buttons}>
                            <Button
                                onClick={decrement}
                                data-id="product-decrement"
                                icon="minus"
                            />
                            <Button
                                onClick={increment}
                                data-id="product-increment"
                                icon="plus"
                            />
                            <Button
                                onClick={delItem}
                                data-id="product-increment"
                                icon="delete"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch, props) => ({
    decrement: () => dispatch(decrement(props.product.id)),
    increment: () => dispatch(increment(props.product.id)),
    delItem: () => dispatch(delItem(props.product.id)),
});

export default connect(null, mapDispatchToProps)(BasketItem);