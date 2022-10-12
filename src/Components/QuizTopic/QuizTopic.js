import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizTopic = () => {
    const quizLoader = useLoaderData();
    const quizCategories = quizLoader.data;
    const quizQuestions = quizCategories.questions;

    return (
        <div>
            <h2 className='text-2xl text-center mt-5 font-bold'>Topic Name: {quizCategories.name}</h2>
            <p className='text-center mt-5 font-bold'>Total Questions: {quizCategories.total}</p>
            {
                quizQuestions.map(questions => <Quiz key={questions.id} questions={questions}></Quiz>)
            }
        </div>
    );
};

export default QuizTopic;