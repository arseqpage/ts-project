import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('classNames', () => {
    test('Button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();

        screen.debug();
    });
});
