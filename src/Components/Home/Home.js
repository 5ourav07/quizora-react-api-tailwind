import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCategories from '../QuizCategories/QuizCategories';

const Home = () => {
    const quizLoader = useLoaderData();
    const quizCategories = quizLoader.data;

    return (
        <div className='my-4 mx-8 text-center'>
            <h1 className='text-5xl font-bold mt-8'>Welcome to Quizora</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 mx-24'>
                {
                    quizCategories.map(quiz => <QuizCategories key={quiz.id} quiz={quiz}></QuizCategories>)
                }
            </div>
        </div>
    );
};

export default Home;