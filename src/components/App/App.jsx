import Content from '../Content'
import Header from '../Header'
import Item from '../Item'
import Menu from '../Menu'
import styles from './App.module.scss'

function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
        </Content>
        <Menu />
      </div>
    </>
  )
}

export default App
