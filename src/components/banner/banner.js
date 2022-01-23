import styles from './banner.module.css';

import banner from './banner.jpg';
import PropTypes from 'prop-types';

const Banner = ({ heading, children }) => (
  <div className={styles.banner}>
    <img src={banner} className={styles.img} alt="banner" />
    <div className={styles.caption}>
      <h2 className={styles.heading}>{heading}</h2>
      <div>{children}</div>
    </div>
  </div>
);

export default Banner;

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.object,
};
