import cn from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';

const Rate = ({ value }) => (
  <div data-id="rate">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        data-id="star"
        data-mark={i <= value - 1 ? 'checked' : 'unchecked'}
        className={cn(styles.star, { [styles.checked]: i <= value - 1 })}
      />
    ))}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number,
};

Rate.defaultProps = {
  value: 5,
};

export default Rate;
