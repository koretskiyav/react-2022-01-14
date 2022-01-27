import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { ReactComponent as BasketIcon } from '../../icons/basket.svg';

import styles from './app.module.css';

class App extends PureComponent {
  list = [];
  total = 0;
  state = { basketOpen: false };

  render() {
    const { restaurants, order } = this.props;
    this.list = restaurants.map(restaurant => restaurant.menu.filter(product => Object.keys(order).includes(product.id)))
          .flat(Infinity);
    this.total = this.list.reduce((sum, item) => sum + order[item.id] * item.price, 0);
    
    //Здесь я хотел зделать, чтобы корзина не открывалась при добавлении в неё нового продукта, 
    //если она перед этим закрылась при удалении из неё всех продуктов.
    //Т.е. чтобы корзина открывалась только по кнопке, хотя автоматически закрывалась бы при удалении всех продуктов. 
    //Объясните, пожалуйста, почему react ругается на данный способ изменения состояния?
    //if (this.list.length === 0) {
    //  this.setState({ basketOpen: false });
    //}

    return (
      <div>
        <Header />
        <div className={styles.icon}>
          <BasketIcon onClick={this.handleClickBasketIcon} />
          <span className={styles.count}>{this.list.length}</span>
        </div>
        <div className={this.list.length > 0 && this.state.basketOpen  ? styles.basketOpen : styles.basketClosed}>
          <Basket list={this.list} total={this.total}/>
        </div>
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }

  handleClickBasketIcon = () => this.list.length > 0 && this.setState({basketOpen: !this.state.basketOpen});
}

App.propTypes = {
  restaurants: PropTypes.array.isRequired,
  order: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(App);
