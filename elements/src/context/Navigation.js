import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();
function NavigationProvider({ children }) {
  const [currentPath, setCurrentpath] = useState(window.location.pathname);

  //used forward and backword Navigation
  useEffect(() => {
    const handler = (e) => {
      setCurrentpath(window.location.pathname);
    };

    window.addEventListener("popstate", handler)
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  //when user navigates through click events or manuallt types url
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentpath(to);
  };
  
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {/* <button onClick={() => navigate("/accordian")}>Go to Accordian</button>
      <button onClick={() => navigate("/dropdown")}>Go to DropDonw</button> */}

      {children}
      {/* {currentPath} */}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };

export default NavigationContext;
