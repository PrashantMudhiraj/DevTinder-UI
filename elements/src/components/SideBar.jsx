import Link from "./Link";

function SideBar() {
  const links = [
    { lable: "Accordion", path: "/accordion" },
    { lable: "DropDown", path: "/dropdown" },
    { lable: "Buttons", path: "/buttonpage" },
    { lable: "Modal", path: "/modal" },
    { lable: "Table", path: "/table" },
    { lable: "Counter", path: "/counter" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        to={link.path}
        key={link.lable}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.lable}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-hidden overflow-y-scroll  flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default SideBar;
