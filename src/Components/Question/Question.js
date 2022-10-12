import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ option, correctAnswer }) => {

    const answer = (item) => {
        if (item === correctAnswer) {
            toast('Correct Answer');
        }
        else {
            toast('Wrong Answer');
        }
    }

    return (
        <div>
            <button onClick={() => { answer(option) }} className='bg-white hover:bg-gray-100 text-left w-3/4 mt-5 p-2 rounded'>
                <input type='radio' /> {option}
            </button>

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

export default Question;