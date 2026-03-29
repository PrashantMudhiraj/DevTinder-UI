import { useContext } from "react";

import NavigationContext from "../context/Navigation.js";

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
