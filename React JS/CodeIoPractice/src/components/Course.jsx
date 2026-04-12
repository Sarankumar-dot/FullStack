
import { useEffect, useState } from "react";

function Course(props) {

  const [purchased,setPurchased] = useState(false);
  const [finalPrice , setFinalprice] = useState(props.price);


  useEffect(() =>{
    console.log(purchased + "is trueee");
  },[purchased,finalPrice])

  function ButtonClick(discount, e) {
    console.log(`${props.title} item purchased with ${discount} % discount`);
    // console.log(e);

    setPurchased(true);
  }


  function ButtonDouble(){
    console.log("double clikc");
    setPurchased(false);
  }

  function discountPrice(){
    const dis = props.price * 20/100;
    setFinalprice(props.price - dis);
  }
  return props.title != null ? (
    <div className="container">
      <img id="photo" src={props.image}></img>
      <h5>{props.title}</h5>
      <h6>{props.description}</h6>
      <h5>{props.price}</h5>
      <h5>Discounted price : {finalPrice}</h5>
      <h6>{props.id + 1} hi</h6>
      <button onClick={(event) => ButtonClick(20, event)}>Buy Now</button>

      <button onDoubleClick={() => ButtonDouble()}>double</button>

      <button onClick={discountPrice}>Add discount</button>
      
      <button onClick={()=> props.delete(props.id)}> Delete </button>

      <p>{purchased ? "item purchased" : "not purchased"}</p>
    </div>
  ) : (
    <div></div>
  );
}

export default Course;
