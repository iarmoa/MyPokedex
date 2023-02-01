import React from 'react';

interface Props {
    children: React.ReactNode,
    className? : string
}

export default function Content({children, className}: Props): JSX.Element {
    return (
        <div className={`content px-12 ${className}`}>
            {children}
        </div>
    );
}