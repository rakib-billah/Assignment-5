import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <>
      <div className="flex overflow-hidden max-w-5xl mx-auto pt-[70px] pb-[30px]">
        {/* left */}
        <div className="w-[55%]">
          <h1 className="font-bold text-[60px] text-[#0F172A] -mb-5">
            Build Your Ideal
          </h1>
          <h1 className="font-bold text-[60px] bg-gradient-to-r from-[#FF5722]  to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your <br /> next project.
          </p>
          <div className="mt-[30px] flex gap-4">
            <button className="btn btn-active btn-secondary bg-[#D91B7E] rounded-full ">
              Explore Technologies
            </button>
            <button className="btn btn-active btn-secondary bg-transparent border border-[#374151] text-[#374151]  hover:shadow-none">
              Learn More
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center w-[45%] -mt-15">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
