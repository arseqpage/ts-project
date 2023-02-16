import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/PageError'

const MainPage = () => {
  const { t } = useTranslation('main-page')

  return (
    <div>
      {t('Главная страница')}
      <BugButton/>
    </div>
  )
}

export default MainPage
