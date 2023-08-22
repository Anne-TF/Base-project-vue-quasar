<template>
   <q-page class="q-pa-md">
     <Suspense>
       <template #default>
        <PokemonCard />
       </template>

       <template #fallback>
        <div>
          <q-skeleton class="wp-30 my-40" height="5em" type="text" />

          <div class="flex flex-inline justify-between q-gutter-y-md">
            <q-skeleton height="28em" type="rect" class="br-8" :class="{
              'wp-15' : $q.screen.gt.md,
              'wp-20' : $q.screen.md,
              'wp-30' : $q.screen.sm,
              'wp-100' : $q.screen.lt.sm
            }" v-for="item in 12" :key="item" />
          </div>
        </div>
       </template>
     </Suspense>
   </q-page>
</template>

<script lang="ts" setup>
import PokemonCard from '../components/PokemonCard.vue';
</script>

