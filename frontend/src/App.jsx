import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
