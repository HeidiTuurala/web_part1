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
      <p>{props.course.name} {props.course.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  
  return (
    <div>
      <Part course={props.kurssi[0]}/>
      <Part course={props.kurssi[1]}/>
      <Part course={props.kurssi[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)

  const kokonaismäärä = props.kurssi[0].exercises + props.kurssi[1].exercises + props.kurssi[2].exercises

  return (
    <div>
      <p>Number of exercises {kokonaismäärä}</p>
    </div>
  )
}

const App = () => {
  const course = {
  name:'Half Stack application development',
  parts: [
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
}
  
  return (
    <div>
      <Header header={course.name} />
      <Content kurssi={course.parts} />
      <Total kurssi={course.parts} />
    </div>
  )
}

export default App

