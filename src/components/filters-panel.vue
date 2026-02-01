<template>
    <VSheet :class="['filters-panel d-flex pa-1', { 'filters-panel--expanded': expanded }]" elevation="3" rounded="xl">
        <div class="filters-panel__controls d-flex ga-1 pa-1">
            <VBtn icon variant="tonal" @click="expanded = !expanded">
                <VIcon
                    icon="mdi-chevron-right"
                    :class="['filters-panel__icon', { 'filters-panel__icon--expanded': expanded }]"
                />
            </VBtn>
            <VBtn icon variant="tonal" @click="clear">
                <VIcon icon="mdi-eraser" />
            </VBtn>
        </div>
        <TransitionExpand axis="x">
            <div v-if="expanded" class="filters-panel__fields d-flex flex-column ga-4">
                <span class="text-subtitle-1">Фильтры</span>

                <VTextField v-model="id" rounded="t-lg" label="ID" hide-details @keyup.enter="apply" />
                <VTextField v-model="name" rounded="t-lg" label="Фамилия пациента" hide-details @keyup.enter="apply" />
                <VSelect v-model="customer" rounded="t-lg" :items="customers" label="Заказчик" hide-details clearable />
            </div>
        </TransitionExpand>
    </VSheet>
</template>

<script lang="ts">
import { TransitionExpand } from "@morev/vue-transitions/vue3";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        TransitionExpand,
    },

    props: {
        customers: { type: Array as () => string[], required: true },
    },

    emits: ["update-id", "update-name", "update-customer"],

    data() {
        return {
            expanded: true,
            id: "",
            name: "",
            customer: null as string | null,
        };
    },

    watch: {
        customer(value) {
            this.$emit("update-customer", value);
        },
    },

    methods: {
        apply() {
            this.$emit("update-id", this.id);
            this.$emit("update-name", this.name);
        },
        clear() {
            this.id = "";
            this.name = "";
            this.customer = null;

            this.apply();
        },
    },
});
</script>

<style lang="css" scoped>
.filters-panel {
    width: fit-content;
    height: 118px;
    transition: height 0.3s ease-in-out;
}
.filters-panel--expanded {
    height: 280px;
}
.filters-panel__controls {
    flex-direction: column;
}
.filters-panel__fields {
    padding: 16px;
    width: 400px;
}
.filters-panel__icon {
    transition: rotate 0.3s ease-in-out;
}
.filters-panel__icon--expanded {
    rotate: 180deg;
}

@media (width < 1024px) {
    .filters-panel {
        width: 100%;
        height: 64px;
    }
    .filters-panel--expanded {
        height: 280px;
    }
    .filters-panel__fields {
        width: calc(100vw - 64px);
    }
    .filters-panel__controls {
        flex-direction: row;
    }
}
</style>
