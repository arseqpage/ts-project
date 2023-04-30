import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import cls from './index.module.scss';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement; // Where import children
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
