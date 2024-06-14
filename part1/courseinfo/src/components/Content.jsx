import Part from "./Part"

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises1} />
      <Part part={part2.name} exercises={part2.exercises2} />
      <Part part={part3.name} exercises={part3.exercises3} />
    </div>
  )
}

export default Content