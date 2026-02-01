<template>
    <VSheet :class="['main-panel d-flex pa-1', { expanded }]" elevation="3" rounded="xl">
        <div class="controls d-flex ga-1 pa-1">
            <VBtn icon variant="tonal" @click="expanded = !expanded">
                <VIcon icon="mdi-chevron-right" :class="['icon', { expanded }]" />
            </VBtn>
            <VBtn icon variant="tonal" @click="clear">
                <VIcon icon="mdi-eraser" />
            </VBtn>
        </div>
        <TransitionExpand axis="x">
            <div v-if="expanded" class="filters-fields d-flex flex-column ga-4">
                <span class="text-subtitle-1">Фильтры</span>

                <VTextField v-model="id" rounded="t-lg" label="IDS" hide-details />
                <VTextField v-model="name" rounded="t-lg" label="Фамилия пациента" hide-details />
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

    emits: ["filter"],

    data() {
        return {
            expanded: true,
            id: "",
            name: "",
            customer: null as string | null,
        };
    },

    methods: {
        clear() {
            this.id = "";
            this.name = "";
            this.customer = null;
        },
    },
});
</script>

<style lang="css" scoped>
.main-panel {
    width: fit-content;
    height: 118px;
    transition: height 0.3s ease-in-out;
}
.main-panel.expanded {
    height: 280px;
}
.controls {
    flex-direction: column;
}
.filters-fields {
    padding: 16px;
    width: 400px;
}
.icon {
    transition: rotate 0.3s ease-in-out;
}
.icon.expanded {
    rotate: 180deg;
}

@media (width < 1024px) {
    .main-panel {
        width: 100%;
        height: 64px;
    }
    .filters-fields {
        width: calc(100vw - 64px);
    }
    .controls {
        flex-direction: row;
    }
}
</style>
