import React from "react";


function FollowUs({icon, name, link}) {
    return (
        <li>
            <a class="text-sm leading-6 text-gray-600 hover:text-gray-900 flex gap-2 items-center dark:text-gray-400" href={link}>
                <img src={icon} alt={name} className="h-4 w-4" />
                <span>{name}</span>
            </a>
        </li> 
    );
}

export default FollowUs;
