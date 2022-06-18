import React, { Fragment } from "react";

const Loader = ({message}) => {
    return (
        // Fragment 文档碎片
        <div className="loader">
            <img src="" alt="loading..." />
            <h2>{message}</h2>
        </div>
    )
}

export default Loader