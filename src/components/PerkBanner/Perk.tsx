import React from 'react';

interface Props{
    
}

const Perk:React.FC<Props> = () => {
    return (
        <div>
            <span className='w-5 h-5 rounded-md bg-violet-500'></span>
            <p>1.5% Cashback</p>
            <p>Online shopping for retail sales direct to consumers</p>
        </div>
    );
};

export default Perk;