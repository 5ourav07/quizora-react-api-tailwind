import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-48 w-3/4 mx-auto'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of React Router?
                </div>
                <div className="collapse-content">
                    <p>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </p>
                </div>
            </div>

            <br />

            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How Does Context API works?
                </div>
                <div className="collapse-content">
                    <p>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </p>
                </div>
            </div>

            <br />

            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is useRef hook?
                </div>
                <div className="collapse-content">
                    <p>
                        The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;