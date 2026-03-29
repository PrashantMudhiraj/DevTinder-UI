// import Accordion from "./components/Accordion";

import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Routes";
import SideBar from "./components/SideBar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

// import "./styles.css";

export default function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      {/* <AccordionPage /> */}
      {/* <ButtonPage /> */}
      {/* <DropdownPage /> */}
      {/* <Panel>
        <h1>Hello</h1>
      </Panel> */}
      {/* <Link to="/accordian">Accordian</Link>
      <Link to="/dropdown">Dropdown</Link>
      <Link to="/buttonpage">Buttons</Link> */}
      <SideBar />

      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/buttonpage">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={1} />
        </Route>
      </div>
    </div>
  );
}
