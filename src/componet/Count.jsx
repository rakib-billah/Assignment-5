const YourStack = ({ addtoCard, setaddtoCard }) => {
  // Single item remove
  const handleRemove = (id) => {
    setaddtoCard(addtoCard.filter((item) => item.id !== id));
  };

  // Remove all items
  const handleRemoveAll = () => {
    setaddtoCard([]);
  };

  return (
    <div>
      {/* Count */}
      <p className="py-2.5 text-[#64748B] text-[14px]">
        <span>{addtoCard.length}</span> Technology Selected
      </p>

      {/* Selected Technologies */}
      <div className="space-y-2">
        {addtoCard.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2"
          >
            {/* Technology */}
            <div className="flex items-center gap-3">
              <img
                src={item.icon}
                alt={item.name}
                className="h-8 w-8 object-contain"
              />

              <div>
                <h3 className="text-[12px] font-semibold text-[#0F172A]">
                  {item.name}
                </h3>

                <p className="text-[8px] text-[#94A3B8]">{item.category}</p>
              </div>
            </div>

            {/* Single Remove */}
            <button
              onClick={() => handleRemove(item.id)}
              className="text-[22px] font-light text-[#94A3B8] hover:text-[#64748B]"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Remove All */}
      <button
        onClick={handleRemoveAll}
        disabled={addtoCard.length === 0}
        className={`mt-3 w-full rounded-[10px] border py-2 ${
          addtoCard.length === 0
            ? "cursor-not-allowed border-gray-200 text-gray-300"
            : "border-[#ED8C85] text-[#D82C20] hover:bg-red-50"
        }`}
      >
        Remove All
      </button>
    </div>
  );
};

export default YourStack;
