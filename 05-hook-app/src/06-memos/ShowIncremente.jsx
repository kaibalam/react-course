import React from "react";

export const ShowIncremente = React.memo( ({ increment }) => {

    console.log('me volvi a generar :(');

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => {
                    increment();
                }}
            >
                Incrementar
            </button>
        </>
    )
})
