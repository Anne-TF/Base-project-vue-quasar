<template>
  <div>
    <h3 class="text-bl-s gt-md">Pokemons</h3>
    <div class="q-gutter-y-md q-gutter-x-sm flex flex-inline justify-between">
      <q-card flat bordered class="br-8"
        :class="{
          'wp-15' : $q.screen.gt.md,
          'wp-20' : $q.screen.md,
          'wp-30' : $q.screen.sm,
          'wp-100' : $q.screen.lt.sm
        }"
        v-for="pokemon in pokemons" :key="pokemon.name">
        <q-card-section class="q-py-xs" style="border-bottom: 1px solid rgba(0, 0, 0, 0.12);">
          <q-img :src="pokemon?.sprites?.front_default ?? ''" />
        </q-card-section>
        <q-card-section class="text-bl-dark text-medium fs-16 q-pb-xs">
          {{ pokemon.name }}
        </q-card-section>

        <q-card-section class="q-pt-none">
          <ul style="padding-left: 1em;">
            <li v-for="stat in pokemon.stats" :key="stat.stat.name">
              Base {{stat.stat.name }}: {{ stat.base_stat }} {{ stat.base_stat > 1 ? 'pts' : 'pt' }}
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PokemonRepository from '../repositories/pokemon.repository';
import { ExtendedPokemonInterface, PokemonInterface } from 'src/modules/Pokemon/interfaces/pokemon.interface';

const pokemonRepository = new PokemonRepository();

const data: PokemonInterface = await pokemonRepository.getPokemons({
    queryParams: {
        limit: 12,
        offset: 0
    }
});

const pokemons: ExtendedPokemonInterface[] = await Promise.all(data.results.map(
    async(pokemon: { name: string; url: string } | ExtendedPokemonInterface, index: number) =>
    {
        pokemon = await pokemonRepository.getPokemonByOrder({ queryParams: { order: index + 1 } });
        return pokemon;
    }));
</script>
