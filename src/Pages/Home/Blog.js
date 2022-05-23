import React from 'react';

const Blog = () => {
    return (
        <div className='px-24 max-h-fit my-5'>
            <div class="card w-full bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">1. How will you improve the performance of a React Application?</h2>
                    <p className='pl-5'><ul className='list-disc'>
                        <li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li> 
                        <li>Code-splitting in React using dynamic import()</li> 
                        <li>Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React.</li>
                    </ul></p><br />

                    <h2 class="card-title">2. What are the different ways to manage a state in a React application?</h2>
                    <p className='pl-5'>
                        There are four main types of state you need to properly manage in your React apps:
                        <ul className='list-disc'>
                        <li>Local state – Local state is data we manage in one or another component.</li>
                        <li>Global state – Global state is data we manage across multiple components.</li> 
                        <li>Server state – Data that comes from an external server that must be integrated with our UI state.</li> 
                        <li>URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
                    </ul></p><br />

                    <h2 class="card-title">3. How does prototypical inheritance work?</h2>
                    <p className='pl-5'> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p><br />

                    <h2 class="card-title">4.  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h2>
                    <p className='pl-5'> One should never update the state directly because of the following reasons:If you update it directly, calling the setState() afterward may just replace the update you made.
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    You will lose control of the state across all components.</p>
                    <p className='pl-5'>useState lets you use local state within a function component. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p><br />

                    <h2 class="card-title">6. What is a unit test? Why should write unit tests?</h2>
                    <p className='pl-5'>A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.</p>
                    <p className='pl-5'>Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money.</p><br />
                </div>
            </div>
        </div>
    );
};

export default Blog;