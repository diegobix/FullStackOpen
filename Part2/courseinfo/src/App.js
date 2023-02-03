const Course = ({course}) => (
  <div>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Sum parts={course.parts} />
  </div>
)

const Header = ({text}) => (
  <h1>{text}</h1>
)

const Content = ({parts}) => parts.map((part) => (
  <Part part={part} key={part.id} />
))

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  );
}

const Sum = ({parts}) => {
  let sum = 0
  for (let p of parts) {
    sum += p.exercises;
  }
  return (
    <p>Total of {sum} exercices</p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

//TODO 2.3

export default App
