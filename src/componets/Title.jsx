import React from 'react';

const Title = ({children}) => {
    return (
        <div className='bg-linear-60 from-sky-50 to-sky-200 py-3 text-black p-3 rounded-2xl'>
            <h2 className='text-4xl'>{children}</h2>
        </div>
    );
};

export default Title;