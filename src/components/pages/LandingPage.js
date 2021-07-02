import React from "react";
import {
  AboutUs,
  Clients,
  Footer,
  Hero,
  MakeUs,
  Product,
  Works,
} from "../organism";
import data from "../../json/data.json";

const LandingPage = () => {
  return (
    <div>
      <Hero data={data.hero} />
      <AboutUs />
      <Product data={data.product} title="Product" />
      <MakeUs />
      <Product data={data.services} title="Services" style="cover" />
      <Works data={data.works} />
      <Clients data={data.client} />
      <Footer />
    </div>
  );
};

export default LandingPage;
