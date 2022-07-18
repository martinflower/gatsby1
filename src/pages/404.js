import React from "react";
import { Link } from "gatsby";
export default function NotFound() {
  return (
    <div>
      <h1>Ooups </h1>
      <p>Cette page est introuvable </p>
      <Link to="/">Take me </Link>
    </div>
  );
}
