import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Ques:1: What are the different ways to manage a state in a React application?</h2>
                    <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.<br />
                        There are four main types of state you need to properly manage in your React apps:<br />
                        <li>Local state</li>
                        <li>Global state</li>
                        <li>Server state</li>
                        <li>URL state</li>
                        Let's cover each of these in detail:<br />
                        Local (UI) state – Local state is data we manage in one or another component.
                        Local state is most often managed in React using the useState hook.
                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.<br />
                        Global (UI) state – Global state is data we manage across multiple components.
                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                        Sometimes state we think should be local might become global.<br />
                        Server state – Data that comes from an external server that must be integrated with our UI state.
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.<br />
                        URL state – Data that exists on our URLs, including the pathname and query parameters.
                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!<br />
                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Ques:2: How does prototypical inheritance work?</h2>
                    <p> prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

                        All JavaScript objects inherit properties and methods from a prototype:

                        <li>Date objects inherit from Date.prototype.</li>
                        <li>Array objects inherit from Array.prototype.</li>
                        <li>Player objects inherit from Player.prototype.</li>

                        The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.<br />
                        Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length).<br />
                        We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).<br />
                        We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Ques:3: What is a unit test? Why should we write unit tests?</h2>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.<br />
                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.<br />
                        Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.<br />
                    </p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Ques:4: What are the difference between angular vs react vs vue?</h2>
                    <img src="https://i.ibb.co/bbDXxbC/Comparative-Analysis-of-Angularjs-vs-React-Js-vs-Vue-Js.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Blog;