import FotterLogo from "../assets/logo-text.png";
const Fotter = () => {
  return (
    <div>
      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-4">
        {/* Left */}
        <div>
          <img src={FotterLogo} alt="" />
          <p className="my-4">
            Curated tools, technologies, and resources for developers building{" "}
            modern software.
          </p>
          <ul className="flex font-medium gap-1.5 ">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        {/* Right  */}
        <div className="flex justify-between">
          <ul>
            <h3 className="font-medium">PRODUCT</h3>
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>

          <ul>
            <h3 className="font-medium">COMPANY</h3>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>

          <ul>
            <h3 className="font-medium">LEGAL</h3>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="pt-4 max-w-5xl mx-auto ">
        <hr className="border-[#64748B] w-full" />
        <p className="items-center py-3">
          © 2026 Dev Stack. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Fotter;
