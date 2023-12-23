/* eslint-disable react/prop-types */

import { useState } from "react";
import Header from "./components/Header";

function App() {
  const students = ['Habib', 'Doddy', 'Erik']
  const [likes, setLikes] = useState(0);

  function handleClick(){
      setLikes(likes + 1);
  }
  return(
      <>
          <Header name="Pa Habib" />
          <ul>
              
              {
                  students.map((student) => (
                      <li key={student}>{student}</li>
                  ))
              }
              
          </ul>
          <button onClick={handleClick}>like({likes})</button>

      </>
  );
}

export default App;
