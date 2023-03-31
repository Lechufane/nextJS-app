import React from "react";
import Link from "next/link";

const PageNotFound: React.FC = () => {
  return (
    <div>
      <h1>Sorry, we couldn't find the page you were looking for</h1>
      <p>Here are some helpful links:</p>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/events'>Events</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageNotFound;
