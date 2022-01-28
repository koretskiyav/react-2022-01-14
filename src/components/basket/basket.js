import Banner from "../banner";
import BasketItem from "./basketItem";
import {connect} from "react-redux";
import {useMemo} from "react";
import styles from './basket.module.css';

function Basket ({ restaurants, order}) {

    const items = useMemo(
        () => restaurants.reduce((items, {menu}) => {
        return items.concat(menu
            .filter((product) => order[product.id] && order[product.id] !== 0)
            .map((product) => ({
                id: product.id,
                name: product.name,
                amount: product.amount = (order[product.id] && order[product.id] !== 0) ? order[product.id] : 0,
                price: product.price,
            })));
    }, []),
        [order]);

    return (
        <div>
        <Banner heading={'Basket'}/>
            <div className={styles.basket}>
            {items.map((product) => (
                <BasketItem key={product.id} product={product} />
            ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    order: state.order || {},
});

export default connect(mapStateToProps)(Basket);