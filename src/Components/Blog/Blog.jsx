import React from 'react';
import Lottie from "lottie-react";
import questions from '../../assets/questions.json'

const Blog = () => {
    return (
        <div className='lg:max-w-screen-2xl mx-auto'>
            <h1 className='text-center text-7xl'>All Blog post</h1>
            <div className='grid grid-cols-2'>
                <div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1>What is difference between nodejs and express js?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>
                                Node.js:
                                Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.

                                Express.js:
                                Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

                                Difference between Node.js and Express.js:

                                -Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
                                -Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1>what is differences between uncontrolled and controlled components?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>
                                Controlled Component
                                A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with setState() method.

                                Controlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data.

                                Uncontrolled Component
                                It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes. To write an uncontrolled component, there is no need to write an event handler for every state update, and you can use a ref to access the value of the form from the DOM.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1>What is a custom hook, and why will you create a custom hook?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>
                                What is a custom hook?
                                A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
                                A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components:

                                A custom hook does not require a specific signature.
                                A software developer can choose what argument the custom hook has and what should the argument return.
                                A custom hook always starts with the name ‘use’.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            <h1>What is difference between nodejs and express js?</h1>
                        </div>
                        <div className="collapse-content">
                            <p>
                                Node.js:
                                Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.

                                Express.js:
                                Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

                                Difference between Node.js and Express.js:

                                -Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
                                -Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
                            </p>
                        </div>
                    </div>


                </div>
                <div>
                    <Lottie animationData={questions}></Lottie>
                </div>
            </div>

        </div>
    );
};

export default Blog;