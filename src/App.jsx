import { Suspense } from "react";
import Banner from "./componet/Banner";
import Fotter from "./componet/Fotter";
import Mainlayout from "./componet/Mainlayout";
import Nav from "./componet/Nav";
import Loading from "./componet/Loding";
import { ToastContainer } from "react-toastify";

//prmise create
const getData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
// console.log(getData);

//function
function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<Loading></Loading>}>
        <Mainlayout getData={getData()}></Mainlayout>
      </Suspense>
      <ToastContainerr />
      <Fotter></Fotter>
    </>
  );
}
export default App;
