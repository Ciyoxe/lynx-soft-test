<template>
    <VSheet class="main-panel d-flex text-body-1 pa-5 ga-4" elevation="3" rounded="xl">
        <span>Дата регистрации</span>

        <div class="select-fields d-flex align-center">
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

        <VBtn class="button" variant="tonal" @click="onSelect">Выбрать</VBtn>
    </VSheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        min: { type: Date, required: true },
        max: { type: Date, required: true },
    },

    emits: ["select"],

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
            return this.from.toLocaleDateString("RU-ru");
        },
        toDateFormatted() {
            return this.to.toLocaleDateString("RU-ru");
        },
    },

    methods: {
        onSelect() {
            this.$emit("select", { from: this.from, to: this.to });
        },
    },
});
</script>

<style lang="css" scoped>
.main-panel {
    align-items: center;
}
.select-fields {
    width: 600px;
    gap: 12px;
}
@media (width < 1024px) {
    .main-panel {
        flex-direction: column;
        align-items: flex-start;
    }
    .select-fields {
        width: 100%;
        gap: 4px;
    }
    .button {
        width: 100%;
    }
}
</style>