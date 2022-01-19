import { ReactComponent as Star } from '../icons/ratingStar.svg';

export default function Rate({ value }) {
  const stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(<Star key={i} />);
  }

  return <div>{stars}</div>;
}
