import React from "react";
import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

const TablePage = () => {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500 outline  outline-orange-800",
      score: 5,
    },
    { name: "Apple", color: "bg-red-500 outline  outline-red-800", score: 1 },
    {
      name: "Lime",
      color: "bg-green-500 outline  outline-green-800",
      score: 2,
    },
    {
      name: "Banana",
      color: "bg-yellow-500 outline  outline-yellow-800",
      score: 3,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`m-3 p-3 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  // const vechileData = [
  //   { Name: "Truck", Price: 15000, DiscountedPrice: 0.5, Image: "truck.png" },
  //   { Name: "Car", Price: 9000, DiscountedPrice: 0.1, Image: "car.png" },
  //   { Name: "Boat", Price: 13000, DiscountedPrice: 0.05, Image: "boat.png" },
  //   { Name: "Bike", Price: 3000, DiscountedPrice: 0.2, Image: "bike.png" },
  // ];

  // const keyFn1 = (vechile) => {
  //   return vechile.Name;
  // };

  // const config2 = [
  //   { label: "Vechile", render: (vechile) => vechile.Name },
  //   { label: "Price", render: (vechile) => vechile.Price },
  //   { label: "Discount Price", render: (vechile) => vechile.DiscountedPrice },
  //   { label: "Image", render: (vechile) => vechile.Image },
  // ];

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
      {/* <Table data={vechileData} config={config2} keyFn={keyFn1} /> */}
    </div>
  );
};

export default TablePage;
