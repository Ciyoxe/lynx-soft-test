<template>
    <VSheet class="date-select d-flex text-body-1 pa-5 ga-4" elevation="3" rounded="xl">
        <span>Дата регистрации</span>

        <div class="date-select__fields d-flex align-center">
            <span>с:</span>
            <VMenu v-model="fromMenuOpen" :close-on-content-click="false">
                <template #activator="{ props }">
                    <VTextField
                        v-bind="props"
                        v-model="fromDateFormatted"
                        density="compact"
                        rounded="t-lg"
                        hide-details
                        readonly
                    />
                </template>
                <VDatePicker v-model="from" :min="min" :max="to" @update:model-value="fromMenuOpen = false" />
            </VMenu>

            <span>по:</span>

            <VMenu v-model="toMenuOpen" :close-on-content-click="false">
                <template #activator="{ props }">
                    <VTextField
                        v-bind="props"
                        v-model="toDateFormatted"
                        density="compact"
                        rounded="t-lg"
                        hide-details
                        readonly
                    />
                </template>
                <VDatePicker v-model="to" :min="from" :max="max" @update:model-value="toMenuOpen = false" />
            </VMenu>
        </div>

        <VBtn class="date-select__button" variant="tonal" @click="onSelect">Выбрать</VBtn>
    </VSheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        min: { type: Date, required: true },
        max: { type: Date, required: true },
    },

    emits: ["update-from", "update-to"],

    data() {
        return {
            from: this.min,
            fromMenuOpen: false,
            to: this.max,
            toMenuOpen: false,
        };
    },

    computed: {
        fromDateFormatted() {
            return this.from.toLocaleDateString("ru-RU");
        },
        toDateFormatted() {
            return this.to.toLocaleDateString("ru-RU");
        },
    },

    methods: {
        onSelect() {
            this.$emit("update-from", this.from);
            this.$emit("update-to", this.to);
        },
    },
});
</script>

<style lang="css" scoped>
.date-select {
    align-items: center;
}
.date-select__fields {
    width: 600px;
    gap: 12px;
}
@media (width < 1024px) {
    .date-select {
        flex-direction: column;
        align-items: flex-start;
    }
    .date-select__fields {
        width: 100%;
        gap: 4px;
    }
    .date-select__button {
        width: 100%;
    }
}
</style>
