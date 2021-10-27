import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import ContactDetails from "./components/contact-details";
import Navigation from "./components/navigation";
import Form from "./components/form";

function App() {
  const routes = [
    {
      path: "/home",
      label: "Home",
      active: false,
    },
    {
      path: "/content",
      label: "Content",
      active: false,
    },
    {
      path: "/contact-us",
      label: "Contact Us",
      active: true,
    },
  ];

  const data = {
    address:
      "Level 7, 60 Light Square Adelaide, South Australia 5000 Australia",
    contact: "1300 061 811",
  };

  return (
    <div className="App">
      <Navigation />
      <main className="container">
        <Breadcrumb className="breadcrumb-container">
          {routes.map((route) => (
            <BreadcrumbItem active={route.active}>{route.label}</BreadcrumbItem>
          ))}
        </Breadcrumb>
        <ContactDetails data={data} />
        <Form />
      </main>
    </div>
  );
}

export default App;
