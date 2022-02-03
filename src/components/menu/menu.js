import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import {productsLoadingSelector, productsLoadedSelector, productsErrorSelector} from '../../redux/selectors';
import {loadProducts} from '../../redux/actions';

import styles from './menu.module.css';
import {useEffect} from 'react';
import Loader from '../loader';

function Menu({menu, error, restId, loading, loaded, loadProducts}) {
    useEffect(() => {
        if (!loading && !loaded) loadProducts(restId);
    }, [restId, loading, loaded]);

    if (loading) return <Loader/>;
    if (error) return <p>Не удалось загрузить меню ресторана. Обновите страницу или возвращайтесь завтра :(</p>;
    if (!loaded) return <p>Меню этого ресторана сейчас недоступно :(</p>;

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

Menu.propTypes = {
    menu:    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    restId:  PropTypes.string.isRequired,
    loading: PropTypes.bool,
    loaded:  PropTypes.bool,
    error:   PropTypes.object,
};

const mapStateToProps = (state, props) => ({
    loading: productsLoadingSelector(state, props),
    loaded:  productsLoadedSelector(state, props),
    error:   productsErrorSelector(state, props),
});

const mapDispatchToProps = {
    loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);