import React from "react";
import { Link } from "react-router-dom";

function LinksFooter({title, link}) {
  return (
    <li>
      <Link class="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400" to={link}>
        {title}
      </Link>
    </li>
  );
}

export default LinksFooter;
