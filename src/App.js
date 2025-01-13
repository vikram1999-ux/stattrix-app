import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";


const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Test = lazy(() => import("./pages/Test"));
const Overview = lazy(() => import("./pages/Overview"));
const Status = lazy(() => import("./pages/Status"));

const App = () => {
  return (
    <Router basename="/stattrix_new">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/test" element={<Test />} />
          <Route path="/admin/dashboard/overview" element={<Overview />} />
          <Route path="/admin/dashboard/status" element={<Status />} />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
