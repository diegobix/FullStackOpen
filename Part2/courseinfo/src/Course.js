const Course = ({course}) => (
  <div>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Sum parts={course.parts} />
  </div>
)

const Header = ({text}) => (
  <h2>{text}</h2>
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
  const sum = parts.reduce((acc, curr) => acc += curr.exercises, 0)
  return (
    <p>Total of {sum} exercices</p>
  )
}

export default Course