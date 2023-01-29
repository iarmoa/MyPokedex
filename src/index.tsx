import React, { FC } from "react";
import { createRoot } from 'react-dom/client';
import AppContainer from "./components/containers/AppContainer";

const App: FC = () => {
    return (
        <AppContainer>
            <h1 className="drop-shadow-title">Que dice la xica</h1>
            <h1>Que dice la xica</h1>
            <p>Que dice la xica</p>
            <p>Que dice la xica</p>
        </AppContainer>
    )
}

const container:HTMLElement|null = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);