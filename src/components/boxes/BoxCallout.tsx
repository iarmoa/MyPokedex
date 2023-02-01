import React from 'react';

interface Props {
    children: React.ReactNode
}

export default function BoxCallout({ children }: Props): JSX.Element{
    return (
        <div className='bg-secondary-white w-full drop-shadow-box'>
            <div className='w-full content-callout px-12 py-2'>
                {children}
            </div>
        </div>
    )
}