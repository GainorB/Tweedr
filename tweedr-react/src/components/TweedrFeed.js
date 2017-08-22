import React from 'react';

const TweedrFeed = props => {

  const displayAllPosts = () => {
    const tweeds = props.allTweeds.map((tweed, index) => {
        return (<p className="Tweeds" key={index}>{tweed.post}</p>);
    });

    return tweeds;
  }

  return (     
      <div>
        <div className="TweedrFeed">
          <h1>tweedr feed</h1>
              {displayAllPosts()}
        </div>  
      </div>
  );
}

export default TweedrFeed;