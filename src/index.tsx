import React, { FC } from "react";
import { createRoot } from 'react-dom/client';
import AppContainer from "./components/containers/AppContainer";
import Main from "./components/pages/Main";

const App: FC = () => {
    return (
        <AppContainer>
            <Main />
        </AppContainer>
    )
}

const container:HTMLElement|null = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);