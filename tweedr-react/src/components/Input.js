import React from 'react';
import axios from 'axios';

const Input = props => {

  const submitTweedr = () => {
    const post = document.querySelector("#textValue").value;
  
    if(post !== ""){
      axios.post("https://tweedrapp.herokuapp.com/tweeds/create", { post })
      .then(() => axios.get("https://tweedrapp.herokuapp.com/tweeds/get").then(tweeds => props.updatePosts(tweeds.data.tweeds)))
      .catch(err => console.log(err));
      
      document.querySelector("#textValue").value = "";
    }
  }

  return (  
      <div className="inputDiv">
        <input type="text" id="textValue" placeholder="What ya Thinking?" className="input" required/> 
        <button onClick={() => submitTweedr()} className="button">Tweed It!</button>
      </div>      
  );
}

export default Input;