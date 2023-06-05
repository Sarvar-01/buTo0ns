import React from "react";

export default function Button({ name, id }) {
    return (
        <>
            <button className={!id ? "red" : id}>
                {"click" && name}
            </button>
        </>
    )
}