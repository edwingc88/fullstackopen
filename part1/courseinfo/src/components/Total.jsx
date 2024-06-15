
const Total = ({ parts }) => {
  console.log('Total', parts)
  // eslint-disable-next-line no-unused-vars

  const sumWithInitial = parts.reduce((a, { exercises }) => {
    console.log(a, exercises)
    return a + exercises;
  }, 0)

  return (
    <p>Number of exercises {sumWithInitial}</p>
  )
}

export default Total