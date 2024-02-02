const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)

  return (
    <div>
      <p>{props.parts.name} {props.parts.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  
  return (
    <div>
      <Part parts={props.osat[0]}/>
      <Part parts={props.osat[1]}/>
      <Part parts={props.osat[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const kokonaismäärä = props.osat.reduce((sum, part) => sum+part.exercises,0)
  return (
    <div>
      <p>Number of exercises {kokonaismäärä}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  
  return (
    <div>
      <Header course={course} />
      <Content osat={parts} />
      <Total osat={parts} />
    </div>
  )
}

export default App

