import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value }) {
  const stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(<Star key={i} />);
  }
  return <div>{stars.map((star) => star)}</div>;
}
