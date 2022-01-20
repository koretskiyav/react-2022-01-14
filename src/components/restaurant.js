import { Component } from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Tabs from './tabs';
import Rate from './rate';

export default class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTab: 1};
    console.log(this.state.currentTab);

  }

  setView = (value) => {
    console.log(value);
     this.setState({currentTab: value});
  }



  render() {
  console.log(this.currentTab);
  const restaurant = this.props.restaurant
  const allStars = restaurant.reviews.reduce((sum, cur) => sum + cur.rating, 0)
  const totalReviews = restaurant.reviews.length
  const rating =  Math.round(allStars / totalReviews)
    const tabs = [
      {id: 1, label: 'Menu'},
      {id: 2, label: 'Reviews'}
    ]
    console.log(this.state.currentTab);
    const component = this.state.currentTab === 1 ?
      <Menu menu={restaurant.menu} /> :
      <Reviews reviews={restaurant.reviews} />

  return (
    <div>
      <h2>{this.props.restaurant.name}</h2>
      <Rate value={rating} />
      <Tabs tabs={tabs} onChange={this.setView}/>
      {component}

    </div>
  );
  }
}