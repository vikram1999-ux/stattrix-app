import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";


const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Test = lazy(() => import("./pages/Test"));

const App = () => {
  return (
    <Router basename="/stattrix_new">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/test" element={<Test />} />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
