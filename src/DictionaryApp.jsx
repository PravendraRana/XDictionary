import React, { useState } from "react";

const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

const DictionaryApp = () => {
    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");

    const handleClick = () => {
        const foundWord = dictionary.find(item => item.word.toLowerCase() === word.toLowerCase());
        if (foundWord) {
            setDefinition(foundWord.meaning);
        } else {
            setDefinition("Word not found in the dictionary.");
        }
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <input
                type="text"
                placeholder="Search for a word..."
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <button onClick={handleClick}>Search</button>
            <h3 style={{ marginTop: 0 }}>Definition:</h3>
            <p>{definition}</p>
        </div>
    );
};

export default DictionaryApp;