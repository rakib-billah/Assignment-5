import { use, useState } from "react";
import AllcardFunction from "./AllcardFunction";

//React Use Hook
const Mainlayout = ({ getData }) => {
  const cardDetails = use(getData);
  // console.log(cardDetails);

  //Total Card Add to Card State
  const [addtoCard, setaddtoCard] = useState([]);
  console.log(addtoCard);

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <AllcardFunction
          cardDetails={cardDetails}
          addtoCard={addtoCard}
          setaddtoCard={setaddtoCard}
        ></AllcardFunction>
      </div>
    </div>
  );
};

export default Mainlayout;
