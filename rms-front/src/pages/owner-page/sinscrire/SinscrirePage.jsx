import React from 'react'
import Sinscrire from '../../../components/owner-page/sinscrire/Sinscrire'
import styles from './SinscrirePage.module.css'



function SinscrirePage() {
  return (
    <div className={styles.container}>
     <div className={styles.sinscrire}>
      <Sinscrire/>
     </div>
    </div>
  )
}

export default SinscrirePage