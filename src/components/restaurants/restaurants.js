// import { useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { selectTabs } from '../../redux/selectors';
import {setActiveId} from '../../redux/actions';


function Restaurants({ tabs, activeId, setActiveId }) {
  // const [activeId, setActiveId] = useState('982bfbce-c5e0-41a0-9f99-d5c20ecee49d');
  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant />
    </div>
  );
}

// Restaurants.propTypes = {
//   restaurants: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string,
//     }).isRequired
//   ).isRequired,
// };

const mapStateToProps = state => ({
  tabs: selectTabs(state),
  activeId: state.restaurant.activeId
});

const mapDispatchToProps = ({
  setActiveId
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
