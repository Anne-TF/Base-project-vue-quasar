import { Store } from 'pinia';
import { PiniaActionAdaptor, PiniaGetterAdaptor } from '../types';

export type State = {
    counter: number;
}

export type Getters = {
    doubleCount: number;
};

export type Actions = {
    increment: () => void;
};

export type PiniaStore = Store<'example', State, Getters, Actions>;

export type PiniaActions = PiniaActionAdaptor<Actions, PiniaStore>;

export type PiniaGetters = PiniaGetterAdaptor<Getters, PiniaStore>;
