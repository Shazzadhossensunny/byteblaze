import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header></Header>
      <div className="minHeight">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
