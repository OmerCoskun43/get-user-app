import { useState } from "react";
import User from "./components/User.jsx";
// import LifeCycleMethods from "./components/LifeCycleMethods";
// import Timer from "./components/Timer";
// import UseEffect from "./components/UseEffect";

function App() {
  // const [show, setShow] = useState(true);

  // const handleShow = () => {
  //   setShow(!show);
  // };
  return (
    <div className="App">
      {/* {show && <LifeCycleMethods />} */}
      {/* <button
        onClick={handleShow}
        type="form-control"
        className="btn btn-warning d-block m-auto mt-3"
      >
        {show ? "Hide" : "Show"}
      </button> */}
      {/* <Timer /> */}

      {/* {show && <UseEffect />} */}
      <User />
    </div>
  );
}

export default App;
