import React from 'react'
import Form from '../../../components/owner-page/form/Form'
import styles from './CreateForm.module.css'
function CreateForm() {
  return (
    <div className={styles.container}>
     <div className={styles.form}>
      <Form/>
     </div>
     </div>
  )
}

export default CreateForm