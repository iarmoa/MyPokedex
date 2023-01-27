import React, { FC } from "react";
import ReactDOM from "react-dom";

const App: FC = () => {
    return (
        <h1 className="text-3xl font-bold underline">React component</h1>
        //<h1 className="text-3xl font-bold underline">
    )
}

ReactDOM.render(<App />, document.getElementById("root"))