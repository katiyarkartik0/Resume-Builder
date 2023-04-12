import CreateResume from "./Components/MainComponents/CreateResume";
import HomePage from "./Components/MainComponents/HomePage";
import ViewResume from "./Components/MainComponents/ViewResume";
import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createResume" element={<CreateResume />}></Route>
          <Route path="/viewResume" element={<ViewResume />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;