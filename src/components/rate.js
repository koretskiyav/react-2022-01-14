import { ReactComponent as Star } from '../icons/ratingStar.svg';

export default function Rate({ value }) {
  const stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(<Star />);
  }

  return <div>{stars}</div>;
}
