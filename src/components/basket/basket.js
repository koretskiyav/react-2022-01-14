import { connect } from 'react-redux';

function Basket({ products, amount, dispatch }) {
  window.onload = function () {
    console.log(products);
    //(3) [{…}, {…}, {…}]
    //  0: {id: 'd75f762a-eadd-49be-8918-ed0daa8dd024', name: 'Chicken tikka masala', price: 12, ingredients: Array(2)}
    //  1: {id: 'c3cb8f92-a2ed-4716-92a1-b6ea813e9049', name: 'Naan', price: 3, ingredients: Array(1)}
    //  2: {id: 'bd129641-c0eb-432b-84b6-8b81d2930358', name: 'Samosa', price: 8, ingredients: Array(2)}
    //  length: 3
    //  [[Prototype]]: Array(0)

    const id = Object.keys(amount);
    console.log(id);
    //0: "d75f762a-eadd-49be-8918-ed0daa8dd024"
    //1: "c3cb8f92-a2ed-4716-92a1-b6ea813e9049"
    //length: 2
    //[[Prototype]]: Array(0)
  };

  // не сделать HT3, пробовал через fixtures, через store.order
  // думаю решение должно быть через новый store но не могу соединить эти две структуры данных.

  return <div>Basket</div>;
}

const mapStateToProps = (state) => ({
  amount: state.order,
  products: state.product,
});

export default connect(mapStateToProps)(Basket);
