"use client";

import React from 'react';

export default function SpeechToText ()
{
    if (typeof window !== "undefined")
        {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition)
        {
            console.error ("SpeechRecognition is not supported in this browser!");
            return; // Exit if not supported
        }
        
        const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
        const grammar = "#JSGF V1.0; grammar hindiWords; public <word> = Namaste | Mera | Naam;";
      
        const recognition = new SpeechRecognition ();
        const speechRecognitionList = new SpeechGrammarList ();
        speechRecognitionList.addFromString (grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.continuous = false;
        recognition.lang = "hi-IN";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
      
        const diagnostic = document.querySelector (".output");
        const bg = document.querySelector ("html");
        const startButton = document.querySelector (".start-btn");
        const stopButton = document.querySelector (".stop-btn");

        startButton?.addEventListener ("click", () => 
        {
            recognition.start ();
            console.log ("Listening for speech...");
        });
        
        stopButton?.addEventListener ("click", () =>
        {
            recognition.stop ();
            console.log ("Stopped listening.");
        });
      
        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const word = event.results[0][0].transcript;
            if (diagnostic) { diagnostic.textContent = `Result received: ${word}`; }
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
            console.error ("Speech recognition error:", event.error);
        };
        
        recognition.onend = () => {
            console.log ("Speech recognition service disconnected.");
        };
      }
    
    return (
        <>
        <button className="start-btn">Start</button>
        <br></br>
        <button className="stop-btn">Stop</button>
        <br></br>
        <div className="output"></div>
        </>
    );
}