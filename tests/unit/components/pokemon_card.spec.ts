import { shallowMount } from '@vue/test-utils';
import PokemonCard from '../../../src/modules/Pokemon/components/PokemonCard.vue';

describe('PokemonCard.vue', () =>
{
    it('render mount a component', () =>
    {
        const wrapper = shallowMount(PokemonCard);

        const component = wrapper.find('.gt-md');

        expect(component.classes()).toContain('gt-md');
    });
});
