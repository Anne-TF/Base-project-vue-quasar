import { PiniaGetters } from './types';

const getters: PiniaGetters = {
    doubleCount: (state) =>
    {
        return state.counter * 2;
    }
};

export default getters;
