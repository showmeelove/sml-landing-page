import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
