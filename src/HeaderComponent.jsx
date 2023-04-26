import React from "react";

export default function HeaderComponent({title}) {
    return (
        <div>
            <h1 className="font-bold text-xl mb-2">{title}</h1>
        </div>
    )
}