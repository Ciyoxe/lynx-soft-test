<script setup lang="ts">
import DateSelect from './components/date-select.vue';

</script>

<template>
    <div>
        Hello Vue
        <VBtn>Hello</VBtn>    
        <DateSelect :min="new Date('2000-12-12')" :max="new Date()" />
    </div>
</template>
