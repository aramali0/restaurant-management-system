import React from 'react'
import Login from '../../../components/owner-page/login/Login'
import styles from './LoginPage.module.css'
function LoginPage() {
  return (
    <div className={styles.container}>
     <div className={styles.login}>
      <Login/>
     </div>
    </div>
  )
}

export default LoginPage