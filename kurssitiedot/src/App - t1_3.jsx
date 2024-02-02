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
      <p>{props.osa.name} {props.osa.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  
  return (
    <div>
      <Part osa={props.osa1}/>
      <Part osa={props.osa2}/>
      <Part osa={props.osa3}/>
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
    const part1 = {
      name: 'Fundamentals of react',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of component',
      exercises: 14
    }
  
  return (
    <div>
        <Header header={course}/>
        <Content osa1={part1} osa2={part2} osa3={part3} />
        <Total kokonaismäärä={(part1.exercises) + (part2.exercises) + (part3.exercises)}/>
    </div>
  )
}

export default App

