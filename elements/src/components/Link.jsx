import classNames from "classnames";
// import { useContext } from "react";
// import NavigationContext from "../context/Navigation";
import useNavigation from "../hooks/useNavigation";

function Link({ to, children, className, activeClassName }) {
  console.log(to , children)
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath == to && activeClassName
  );

  const handler = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handler} href={to} className={classes}>
      {children}
    </a>
  );
}

export default Link;
