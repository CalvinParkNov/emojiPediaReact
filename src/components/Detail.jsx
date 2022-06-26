import React from "react";

function Emoji (attr){
    return <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {attr.emoji}
      </span>
      <span>{attr.emojiName}</span>
    </dt>
    <dd>
    {attr.description}
    </dd>
  </div>
}

export default Emoji;