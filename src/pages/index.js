import React from "react";
import { Link } from "gatsby";
const Index = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">My Home Page</h1>
      <p>This my first blog page </p>
      <Link to="/about">A porpos</Link>
    </div>
  );
};
export default Index;
