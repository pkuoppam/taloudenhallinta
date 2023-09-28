import { ButtonContainer } from '../../shared/buttons'
import { FloatingButton } from '../../shared/buttons'
import Content from '../Content'
import Header from '../Header'
import Items from '../Items'
import Menu from '../Menu'
import Stats from '../Stats'
import styles from './App.module.scss'

function App() {

  return (
    <>
      <ButtonContainer>
      <div className={styles.app}>
        <Header />
        <Content>
          <Stats />
        </Content>
        <Menu />
      </div>
      </ButtonContainer>
    </>
  )
}

export default App
