<script setup lang="ts">
import DateSelect from './components/date-select.vue';
import FiltersPanel from './components/filters-panel.vue';

</script>

<template>
    <div>
        <DateSelect :min="new Date('2000-12-12')" :max="new Date()" />
        <FiltersPanel :customers="['a', 'b', 'c']" />
    </div>
</template>
