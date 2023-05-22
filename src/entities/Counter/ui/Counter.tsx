import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const countValue = useSelector((state: StateSchema) => state.counter);

    const increment = () => {
        dispatch(counterActions.increment);
    };

    const decrement = () => {
        dispatch(counterActions.decrement);
    };

    return (
        <div>
            <h1>
                {countValue}
            </h1>
            <Button
                onClick={increment}

            >
                increment
            </Button>
            <Button
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
