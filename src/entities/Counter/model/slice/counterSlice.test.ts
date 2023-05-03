import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('Decrement', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('Increment', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
    });

    test('Empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
