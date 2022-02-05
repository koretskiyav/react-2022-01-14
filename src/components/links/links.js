import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './links.module.css';

function Links({ links }) {
  return (
    <div className={styles.links}>
      {links.map(({ linkId, label, to }) => (
        <NavLink
          key={linkId}
          to={to}
          className={styles.link}
          activeClassName={styles.active}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      linkId: PropTypes.string.isRequired,
      label: PropTypes.string,
      to: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Links;
