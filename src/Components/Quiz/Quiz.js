import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import Question from '../Question/Question';

const Quiz = ({ questions }) => {
    const { question, options, correctAnswer } = questions;

    const answer = () => {
        toast(correctAnswer);
    }

    return (
        <div className='text-center bg-gray-400 mb-5 mx-auto w-1/2 mt-8 p-5 rounded-md'>
            <p className='text-2xl font-bold'>Q: {question}</p>

            <div className='grid grid-cols-1 w-3/4 mt-5 mx-auto'>
                {
                    options.map((option, id) => <Question key={id} option={option} correctAnswer={correctAnswer}></Question>)
                }
            </div>

            <button onClick={answer} className='mt-6 w-6 hover:text-white cursor-pointer'><EyeIcon></EyeIcon></button>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </div>
    );
};

export default Quiz;