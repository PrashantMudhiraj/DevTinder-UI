import Accordion from "../components/Accordion";
// import ButtonPage from "./pages/ButtonPage";
// import "./styles.css";

export default function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "header-1",
      content:
        "Hello, I'm PrashantOfficia sunt elit consectetur pariatur. Ad aliqua ut eu id dolor excepteur velit. Excepteur aliquip in exercitation nostrud incididunt non minim voluptate do.",
    },
    {
      id: 2,
      label: "header-2",
      content:
        "Minim mollit aliqua ipsum esse ut. Non cupidatat magna tempor in ullamco tempor. Labore magna minim dolor mollit. Sint dolore quis ex esse minim mollit mollit anim.",
    },
    {
      id: 3,
      label: "header-3",
      content:
        " abc efjnekv Minim moll. Non cupidatat magna tempor in ullamco tempor. Labore magna minim dolor mollit. Sint dolore quis ex esse minim mollit mollit anim.",
    },
  ];

  return (
    <div className="App">
      <Accordion items={items} />
      {/* <ButtonPage /> */}
    </div>
  );
}
