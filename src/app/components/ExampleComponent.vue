<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <h5 class="cursor-pointer" style="user-select: none" @click="exampleStore.increment()">
      {{ exampleStore.counter }}
    </h5>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo, Meta } from '../interfaces/models.interface';
import { useExampleStore } from 'stores/example';

interface Props {
    title: string;
    todos?: Todo[];
    meta: Meta;
    active: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    todos: () => []
});
const exampleStore = useExampleStore();

const clickCount = ref(0);
function increment()
{
    clickCount.value += 1;
    return clickCount.value;
}

const todoCount = computed(() => props.todos.length);

</script>
