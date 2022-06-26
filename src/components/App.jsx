import React from "react";
import Detail from "./Detail";
import Emoji from "../emojipedia";

// {   id: 1,   emoji: "💪",   name: "Tense Biceps",   meaning:     "“You can do
// that!” or “I feel strong!” Arm with tense biceps. Also used in connection
// with doing sports, e.g. at the gym." },
function emojiDetail(Emoji) {
    return <Detail
        key={Emoji.id}
        emoji={Emoji.emoji}
        emojiName={Emoji.name}
        description={Emoji.meaning}/>
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {Emoji.map(emojiDetail)}</dl>
        </div>
    );
}

export default App;
