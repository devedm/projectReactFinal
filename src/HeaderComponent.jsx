import React from "react";

export default function HeaderComponent({title}) {
    return (
        <div>
            <h1 className="font-bold text-3xl mb-2 text-white">{title}</h1>
        </div>
    )
}