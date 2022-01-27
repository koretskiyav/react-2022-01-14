import Button from '../../button';

export default function BasketItem({
  name,
  price,
  amount,
  increment,
  decrement,
  drop,
}) {
  return (
    <div>
      <h5>{name}</h5>
      <p>Count: {amount}</p>
      <p>Cost: {amount * price}$</p>
      <div style={{ display: 'flex' }}>
        <Button onClick={decrement} icon="minus" />
        <Button onClick={increment} icon="plus" />
        <Button onClick={drop} icon="cross" />
      </div>
    </div>
  );
}
