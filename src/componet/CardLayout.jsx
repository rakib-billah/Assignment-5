import { toast } from "react-toastify";

const CardLayout = ({ card, addtoCard, setaddtoCard }) => {
  const isAdded = addtoCard.some((item) => item.id === card.id);

  const handAddTOCard = () => {
    if (isAdded) return;
    setaddtoCard([...addtoCard, card]);
    toast.success("Technology added successfully!");
  };

  return (
    <div>
      <div className="rounded-xl border border-gray-200 bg-white p-3">
        <div className="mb-3 flex items-center justify-between">
          <img src={card.icon} alt={card.name} className="h-6 w-6" />

          <span className="rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-500">
            {card.badge}
          </span>
        </div>

        <h3 className="mb-2 text-sm font-semibold text-gray-900">
          {card.name}
        </h3>

        <p className="mb-3 text-xs leading-5 text-gray-500">
          {card.description}
        </p>

        <div className="mb-3 flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
          <span className="rounded bg-gray-100 px-1.5 py-1 text-xs text-gray-600">
            {card.category}
          </span>

          <span className="text-xs text-gray-500">{card.difficulty}</span>

          <span className="whitespace-nowrap text-xs text-gray-700">
            ⭐{card.rating}
          </span>
        </div>

        <button
          onClick={handAddTOCard}
          disabled={isAdded}
          className={`w-full rounded-md py-2 text-xs text-white ${
            isAdded
              ? "cursor-not-allowed bg-gray-400"
              : "bg-gray-900 hover:bg-gray-700"
          }`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default CardLayout;
