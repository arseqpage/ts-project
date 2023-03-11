import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageloaderProps {
  className?: string
}

const PageLoader = ({ className = '' }: PageloaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
