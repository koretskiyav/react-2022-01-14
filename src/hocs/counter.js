import PropTypes from 'prop-types';
import useAmount from '../hooks/use-amount';

 const asdf = (WrappedComponent) => (props) => {
  const amountProps = useAmount(0);
  return <WrappedComponent {...props} {...amountProps} />;
};

asdf.propTypes = {
  props: PropTypes.shape({
    product: PropTypes.object.isRequired,
  }).isRequired,
};

export default asdf;