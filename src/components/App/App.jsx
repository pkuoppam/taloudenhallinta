import { ButtonContainer } from '../../shared/buttons'
import { FloatingButton } from '../../shared/buttons'
import Content from '../Content'
import Header from '../Header'
import Items from '../Items'
import Menu from '../Menu'
import Stats from '../Stats'
import Settings from '../Settings'
import styles from './App.module.scss'

function App() {

  return (
    <>
      <ButtonContainer>
      <div className={styles.app}>
        <Header />
        <Content>
          <Settings />
        </Content>
        <Menu />
      </div>
      </ButtonContainer>
    </>
  )
}

export default App
