import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Statistics() {
    const quizLoader = useLoaderData();
    const quizCategories = quizLoader.data;

    return (
        <ResponsiveContainer width="95%" height={400}>
            <BarChart
                className="barChart mt-32"
                width={600}
                height={300}
                data={quizCategories}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" barSize={4} fill="#05386b" />
            </BarChart>
        </ResponsiveContainer>
    );
}