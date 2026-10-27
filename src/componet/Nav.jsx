import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div>
      <nav className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between pt-2 pb-2">
          <img src={Logo} alt="" />

          <ul className="flex gap-x-7">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex gap-4 items-center">
            <a href="">Sing In</a>
            <button className="btn btn-active btn-secondary bg-[#D91B7E] rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
