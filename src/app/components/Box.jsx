import Container from "./Container"

const Box = (Box) => {
  return (
    <div className="relative">
    <Container>
      <div className="relative pt-36 ml-auto">
        {Box.children}
      </div>
    </Container>
  </div>
  )
}

export default Box