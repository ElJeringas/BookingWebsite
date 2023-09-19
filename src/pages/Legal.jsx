import React from 'react'
import '../styles/legal.css'
import { useTranslation } from 'react-i18next'

function Legal() {
  const {t} = useTranslation('global')
  return (
    <div className='legal'>
      <p>{t(`copyright.description`)}</p>
    </div>
  )
}

export default Legal