import Menu from "./menu"
import Reviews from "./reviews"

export default function Restaurant({restaurant}){

    const avg = Math.round( restaurant.reviews.reduce((sum, item)=>sum+=item.rating, 0)/restaurant.reviews.length)

  return(
    <div>
      <Menu menu={restaurant.menu}/>
      <Reviews reviews={restaurant.reviews}/>
      <p>Avarage sign: {avg}</p>
    </div>
  )

}