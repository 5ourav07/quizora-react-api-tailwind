import React from 'react';
import { Link } from 'react-router-dom';


const QuizCategories = ({ quiz }) => {

    const { logo, name, total, id } = quiz;

    return (
        <div className='w-64 h-96 p-3 border-2 border-black rounded-xl'>
            <img className='w-60 h-60 rounded-xl bg-black' src={logo} alt="" />
            <div className='flex flex-col justify-center items-center mt-4'>
                <div className='font-bold'>
                    <p>Topic Name: {name}</p>
                    <p>Total Quiz: {total}</p>
                </div>
                <div className='border-2 w-28 p-1 rounded-xl bg-black text-white text-center font-bold mt-3 hover:bg-slate-600'>
                    <Link to={`/quiz/${id}`}>
                        <button>Start Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizCategories;