import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Main from "./components/layout/Main";
import ScrollToTop from "react-scroll-to-top";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";
import PayrollSystem from "./components/ProductsFolder/PayrollSystem/PayrollSystem";
import ECommerce from "./components/ProductsFolder/ECommerce/ECommerce";
import HotelBook from "./components/ProductsFolder/HotelBook/HotelBook";
import InterConnectBill from "./components/ProductsFolder/InterConnectBill/InterConnectBill";
import RupantorERP from "./components/ProductsFolder/RupantorERP/RupantorERP";
import RupantorInventory from "./components/ProductsFolder/RupantorInventory/RupantorInventory";
import DomainInventory from "./components/ServicesFolder/DomainInventory/DomainInventory";
import ERP from "./components/ServicesFolder/ERP/ERP";
import Learning from "./components/ServicesFolder/Learning/Learning";
import CustomApp from "./components/ServicesFolder/CustomApp/CustomApp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Hero></Hero>,
        },

        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/career",
          element: <Career></Career>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/payroll",
          element: <PayrollSystem></PayrollSystem>
        },
        {
          path: "/e-commerce",
          element: <ECommerce></ECommerce>
        },
        {
          path: "/hotel-booking-system",
          element: <HotelBook></HotelBook>
        },
        {
          path: "/interconnect",
          element: <InterConnectBill></InterConnectBill>
        },
        {
          path: "/rupantor-erp",
          element: <RupantorERP></RupantorERP>
        },
        {
          path: "/rupantor-inventory",
          element: <RupantorInventory></RupantorInventory>
        },
        {
          path: "/domain_hosting",
          element: <DomainInventory></DomainInventory>
        },
        {
          path: "/erp",
          element: <ERP></ERP>
        },
        {
          path: "/learning",
          element: <Learning></Learning>
        },
        {
          path: "/custom-app",
          element: <CustomApp></CustomApp>
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <ScrollToTop
        smooth
        fill="currentColor"
        viewBox="0 0 16 16"
        height="3em"
        width="3em"
        svgPath="M2 16a2 2 0 01-2-2V2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 001 0z"
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
