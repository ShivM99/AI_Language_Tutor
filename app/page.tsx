// rafce (React App snippet from ES7+React snippets)
"use client"; // Add "use client" to make the component interactive

import React from 'react';
import Link from 'next/link';

/* 2 ways to create a React component:
-- class
-- function (more popular)
*/

export default function Hello () // By convention, use PascalCasing to name the function
{
    //JSX: JavaScript XML (JSX allows us to create dynamic content easily)
    const name = 'Shivani';
    if (name)
        return (
        // Fragment (<>...</>) is used to wrap multiple elements in the 'return' statement
        // For adding anchor to another page, we use <Link> and not <a> as the later re-load all the repititive files, like CSS, which is not even required
        // For adding an image, we use <Image> and not <img>
        <>
            <h1>Hello, {name}!</h1>
            <Link href='/first'>START HERE</Link>
        </>
        );
    else
        return (
        <>
            <h1>Hello, Learner!'</h1>
            <Link href='/first'>START HERE</Link>
        </>
        );
}