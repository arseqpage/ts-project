import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import Loader from 'shared/ui/Loader/Loader'

interface PageloaderProps {
  className?: string
}

const PageLoader = ({ className = '' }: PageloaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader/>
    </div>
  )
}

export default PageLoader
