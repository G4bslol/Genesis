import { Header } from '../../components/Header'
import { CaixaCircles, Container, Circle1, Circle2, Circle3 } from './styles'

export function Animations() {

  return (
    <>
      <Container>
        <Header />
        <CaixaCircles>
          <Circle1 />
          <Circle2 />
          <Circle3 />
        </CaixaCircles>
      </Container>
    </>
  )
}
