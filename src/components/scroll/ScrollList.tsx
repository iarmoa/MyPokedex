import React from 'react';
import ScrollItem from './ScrollItem.Interface';

interface Prop{
    list: Array<ScrollItem>
    className?: string | null
}

export default function ScrollList({ list, className = '' }: Prop){
    return (
        <div className={`max-h-max min-w-max ${className}`}>
            { list.map(item => (
                <div key={item.id} className='pointer-events-none cursor-pointer py-1 border-t-2 border-b-2 border-secondary-white transition ease-in-out hover:border-primary-brown'>
                    <div key={item.id + 'ins'} className='pointer-events-auto py-2 px-4 text-base tracking-normal transition ease-in-out hover:bg-primary-brown hover:text-secondary-white'>
                        { item.displayName }
                    </div>
                </div>
            )) }
        </div>
    );
}