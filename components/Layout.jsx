import Navbar from './Navbar'
import Footer from './Footer'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
