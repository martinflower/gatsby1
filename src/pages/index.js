import React from "react";
import { Link } from "gatsby";
const Index = () => {
  return (
    <div>
      <h1>My Home Page</h1>
      <p>This my first blog page </p>
      <Link to="/about">A porpos</Link>
    </div>
  );
};
export default Index;
