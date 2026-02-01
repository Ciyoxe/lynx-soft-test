<template>
    <main class="d-flex flex-column ga-3">
        <DateSelect :min="new Date('2000-12-12')" :max="new Date()" />
        <div class="container d-flex ga-3">
            <FiltersPanel :customers="['a', 'b', 'c']" />
            <PatientsTable class="table" :patients="patientsData" />
        </div>
    </main>
</template>

<script setup lang="ts">
import DateSelect from './components/date-select.vue';
import FiltersPanel from './components/filters-panel.vue';
import PatientsTable from './components/patients-table.vue';

import patientsData from './patients.data';
</script>

<style lang="css" scoped>
main {
    padding: 16px;
    min-height: 100dvh;
}
.table {
    flex: 1;
}

@media (width < 1024px) {
    .container {
        flex-direction: column;
    }
}
</style>