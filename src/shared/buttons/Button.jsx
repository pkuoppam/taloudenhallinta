import styles from './buttons.module.scss'

function Button(props) {
  return (
    <button type='button' className={styles.button} {...props} /> 
  )
}

export { Button as default, Button }
