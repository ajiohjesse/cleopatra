import styled from 'styled-components'
import styles from './Styled.module.css'

// export const Container = styled.div`
//   width: min(100% - 64px, 1024px);
//   margin: 0 auto;
// `
export const Container = ({ children, ...delegated }) => {
  return <div className={styles.container}>{children}</div>
}
