import CardLayout from "./CardLayout";
import Count from "./Count";

const AllcardFunction = ({ cardDetails, addtoCard, setaddtoCard }) => {
  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-9">
        <h2 className="text-[#0F172A] font-bold text-[40px] mb-7">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <div className="grid grid-cols-3 gap-3 mb-12">
          {cardDetails.map((card) => (
            <CardLayout
              key={card.id}
              card={card}
              addtoCard={addtoCard}
              setaddtoCard={setaddtoCard}
            />
          ))}
        </div>
      </div>
      <div className="col-span-3 mt-[90px]">
        <div className=" rounded-xl border border-gray-200 bg-white p-4">
          <h2 className="font-semibold text-[20px]">Your Stack</h2>
          <Count addtoCard={addtoCard} setaddtoCard={setaddtoCard}></Count>
        </div>
      </div>
    </div>
  );
};

export default AllcardFunction;
