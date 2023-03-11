import { classNames } from 'shared/lib/classNames/classNames'
import { useEffect, useState } from 'react'
import {Button} from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

// Test btn
const BugButton = () => {
  const [err, setErr] = useState(false)

  const { t } = useTranslation()

  const throwErr = () => { setErr(true) }

  useEffect(() => {
    if (err) throw new Error()
  }, [err])

  return (
    <Button
      onClick={throwErr}
    >
      {t('Throw Error')}
    </Button>
  )
}

export default BugButton
