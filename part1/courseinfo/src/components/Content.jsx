import Part from "./Part"

const Content = ({ parts }) => {
  console.log(parts)

  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises1} />
      <Part name={parts[1].name} exercises={parts[0].exercises2} />
      <Part name={parts[2].name} exercises={parts[0].exercises3} />
    </div>
  )
}

export default Content