const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.osa} {props.tehtävät}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part osa={props.osa1} tehtävät={props.tehtävät1}/>
      <Part osa={props.osa2} tehtävät={props.tehtävät2}/>
      <Part osa={props.osa3} tehtävät={props.tehtävät3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.kokonaismäärä}</p>
    </div>
  )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of react'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of component'
    const exercises3 = 14
  
  return (
    <div>
        <Header header={course}/>
        <Content osa1={part1} tehtävät1={exercises1} osa2={part2} tehtävät2={exercises2} osa3={part3} tehtävät3={exercises3}/>
        <Total kokonaismäärä={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
