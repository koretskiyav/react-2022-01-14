import { useState } from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { selectRestaurant } from '../../redux/selectors';


const tabs = [
  { id: 'menu', label: 'Menu' },
  { id: 'reviews', label: 'Reviews' },
];

const Restaurant = ({restaurant:{id, name, menu, reviews, rating}}) => {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <div>
      <Banner heading={name}>
        <Rate value={rating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} key={id} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} />}
    </div>
  );
};

// Restaurant.propTypes = {
//   restaurant: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string,
//     menu: PropTypes.array,
//     reviews: PropTypes.arrayOf(
//       PropTypes.shape({
//         rating: PropTypes.number.isRequired,
//       }).isRequired
//     ).isRequired,
//   }).isRequired,
// };

const mapStateToProps = (state) => ({
  restaurant: selectRestaurant(state)
});

export default connect(mapStateToProps)(Restaurant);