"use client"; // Add "use client" to make the component interactive

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import namaste from '../pictures/namaste.jpg'; // '.' refers to the current directory, '..' refers to 1 level above the current directory
import {GiSpeaker} from "react-icons/gi";

/* 2 ways to create a function:
-- function name (arg: type) {...}
-- const name = (arg: type) => {...}; // 'const name =' is used to declare a variable and assigning '()' means we want to declare a function in that variable
The former is hoisted and does not ends with a semi-colon, whereas the later is not hoisted and ends with a semi-colon
*/

export default function Namaste ()
{
    const pronounce = (word: string) =>
    {
        const utterance = new SpeechSynthesisUtterance (word); // Create an object of the 'SpeechSynthesisUtterance' class (a built-in class in the Web Speech API)
        utterance.lang = 'hi-IN'; // Set the accent of language to Hindi
        window.speechSynthesis.speak (utterance); // Call the 'speak()' method of the Web Speech API using its window.speechSynthesis object
    };
    return (
        <>
            <Image src={namaste} alt="Namaste" style={{width: '100px', height: 'auto'}} />
            <h1><b>नमस्ते</b>    <button onClick={() => pronounce('namastey')}><GiSpeaker /></button></h1>
            <h1><b>Namaste</b></h1>
            <ul className="list-group">
                <li className="list-group-item">न -- Na   <button onClick={() => pronounce('na')}><GiSpeaker /></button></li>
                <li className="list-group-item">म -- ma  <button onClick={() => pronounce('ma')}><GiSpeaker /></button></li>
                <li className="list-group-item">स्ते -- ste   <button onClick={() => pronounce('stay')}><GiSpeaker /></button></li>
            </ul>
            <p><b>Namaste</b> is a greeting word, which means <b>Hello</b> (when starting the conversation) or <b>Goodbye</b> (when ending the conversation)</p>
            <Link href='/speak'>NEXT</Link>
        </>
    );
}