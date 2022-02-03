import {Component} from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import {connect} from "react-redux";
import {loadProducts} from "../../redux/actions";
import {productsRestaurantLoadedSelector, productsRestaurantLoadingSelector} from "../../redux/selectors";
import Loader from "../loader";

class Menu extends Component {
    static propTypes = {
        menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    };

    state = {
        error: null,
        loading: false,
        loaded: false,
    };

    componentDidCatch(error) {
        this.setState({error});
    }

    componentDidMount() {
        const {restId, loading, loaded, loadProducts} = this.props;
        if (!loading && !loaded) loadProducts(restId).then(() => {
            this.setState({loading, loaded});
        });
    }

    render() {
        const {menu, loading, loaded} = this.props;

        if (this.state.error) {
            return <p>Меню этого ресторана сейчас недоступно :(</p>;
        }

        if (loading) return <Loader/>;
        if (!loaded) return 'No data :(';

        return (
            <div className={styles.menu}>
                <div>
                    {menu.map((id) => (
                        <Product key={id} id={id}/>
                    ))}
                </div>
                <div>
                    <Basket/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    loading: productsRestaurantLoadingSelector(state, props),
    loaded: productsRestaurantLoadedSelector(state, props),
});

const mapDispatchToProps = {
    loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
