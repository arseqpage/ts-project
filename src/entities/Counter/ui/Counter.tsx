import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {

}

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const { t } = useTranslation();

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>

            <Button onClick={increment} data-testid="increment-button">{t('Increment')}</Button>

            <Button onClick={decrement} data-testid="decrement-button">{t('Decrement')}</Button>
        </div>
    );
};
