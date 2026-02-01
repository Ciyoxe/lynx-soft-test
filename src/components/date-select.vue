<template>
    <div class="d-flex align-center ga-4 text-body-1">
        <span>Дата регистрации с:</span>

        <VMenu v-model="fromMenuOpen" :close-on-content-click="false">
            <template #activator="{ props }">
                <VTextField
                    v-bind="props"
                    v-model="fromDateFormatted"
                    max-width="328px"
                    hide-details
                    readonly
                    />
                </template>
                <VDatePicker v-model="from" @update:model-value="fromMenuOpen = false" />
            </VMenu>
            
            <span>по:</span>
            
            <VMenu v-model="toMenuOpen" :close-on-content-click="false">
                <template #activator="{ props }">
                    <VTextField
                    v-bind="props"
                    v-model="toDateFormatted"
                    max-width="328px"
                    hide-details
                    readonly
                />
            </template>
            <VDatePicker v-model="to" @update:model-value="toMenuOpen = false" />
        </VMenu>

        <VBtn @click="onSelect">Выбрать</VBtn>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    emits: ["select"],

    data() {
        return {
            from: null as Date | null,
            fromMenuOpen: false,

            to: null as Date | null,
            toMenuOpen: false,
        };
    },

    computed: {
        fromDateFormatted() {
            return this.from?.toLocaleDateString('RU-ru');
        },
        toDateFormatted() {
            return this.to?.toLocaleDateString('RU-ru');
        },
    },

    methods: {
        onSelect() {
            this.$emit("select", { from: this.from, to: this.to });
        },
    },
});
</script>
