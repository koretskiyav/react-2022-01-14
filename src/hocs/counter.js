import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const startsFrom = props.startsFrom === undefined ? 0 : +props.startsFrom
  const amountProps = useAmount(startsFrom);
  return <WrappedComponent {...props} {...amountProps} />;
};
