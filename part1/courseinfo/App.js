import React from 'react';
import './App.css'

function Header(props) {

  return (

    <h1>{props.course}</h1>
  )
}

function Content(props) {
  
  return (
    // <>
    <p>{props.part} {props.exercises}</p>
    // </>
  )
}

function Total(props) {
  
  return(
    // <>
    <p>Number of exercises {props.total}</p>
    // </>
  )
}


function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total = exercises1+exercises2+exercises3
  return (
    <div className="App">
      <div className="container">
        <Header course={course}/>
        <Content  part={part1} exercises={exercises1}/>
        <Content  part={part2} exercises={exercises2}/>
        <Content  part={part3} exercises={exercises3}/>
        <Total total={total}/>
        </div>
    </div>
  );
}

export default App;
