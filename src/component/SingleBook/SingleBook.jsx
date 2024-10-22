import React from 'react';

const SingleBook = ({book}) => {
    const {title}=book
    return (
        <div className='bg-slate-200 p-3 m-3'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};

export default SingleBook;