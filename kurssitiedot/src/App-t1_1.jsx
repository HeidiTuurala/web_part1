const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.osa1} {props.tehtävät1}</p>
      <p>{props.osa2} {props.tehtävät2}</p>
      <p>{props.osa3} {props.tehtävät3}</p>
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

        <Content osa1={part1} tehtävät1={exercises1}/>
        <Content osa2={part2} tehtävät2={exercises2}/>
        <Content osa3={part3} tehtävät3={exercises3}/>
        
        <Total kokonaismäärä={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
