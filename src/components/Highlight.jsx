import React from 'react';

const Highlight = ({IconOne, IconTwo, text}) => {
    return (
        <div className='flex text-[#008F95] justify-center items-center border border-[#008F95] p-6 m-6'>
            <IconOne className="mr-4" />
            <h1 className='border-x-2 px-4 uppercase font-bold'>{text}</h1>
            <IconTwo className="ml-4" />
        </div>
    );
}

export default Highlight;
