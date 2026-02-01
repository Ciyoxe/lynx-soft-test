<template>
    <main class="app d-flex flex-column ga-3">
        <DateSelect :min="minDate" :max="maxDate" @update-from="filterFrom = $event" @update-to="filterTo = $event" />
        <div class="app__container d-flex ga-3">
            <FiltersPanel
                :customers="customers"
                @update-id="filterId = $event"
                @update-name="filterName = $event"
                @update-customer="filterCustomer = $event"
            />
            <PatientsTable class="app__table" :patients="filteredPatients" :has-filters="hasActiveFilter" />
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DateSelect from "./components/date-select.vue";
import FiltersPanel from "./components/filters-panel.vue";
import PatientsTable from "./components/patients-table.vue";
import patientsData from "./patients.data";

export default defineComponent({
    components: { DateSelect, FiltersPanel, PatientsTable },

    data() {
        return {
            patientsData,
            filterId: "",
            filterName: "",
            filterCustomer: null as string | null,
            filterFrom: null as Date | null,
            filterTo: null as Date | null,
        };
    },

    computed: {
        customers() {
            return [...new Set(this.patientsData.map((p) => p.customer).filter((c) => c !== null))];
        },
        minDate() {
            return new Date(Math.min(...this.patientsData.map((p) => p.registrationDate.getTime())));
        },
        maxDate() {
            return new Date(Math.max(...this.patientsData.map((p) => p.registrationDate.getTime())));
        },
        hasActiveFilter() {
            return (
                this.filterId !== "" ||
                this.filterName !== "" ||
                this.filterCustomer !== null ||
                this.filterFrom !== null ||
                this.filterTo !== null
            );
        },
        filteredPatients() {
            if (!this.hasActiveFilter) return [];

            return this.patientsData.filter((p) => {
                if (this.filterId && !String(p.id).includes(this.filterId)) return false;
                if (this.filterName && !p.name.toLowerCase().includes(this.filterName.toLowerCase())) return false;
                if (this.filterCustomer && p.customer !== this.filterCustomer) return false;
                if (this.filterFrom && p.registrationDate < this.filterFrom) return false;
                if (this.filterTo && p.registrationDate > this.filterTo) return false;
                return true;
            });
        },
    },
});
</script>

<style lang="css" scoped>
.app {
    padding: 16px;
    min-height: 100dvh;
}
.app__table {
    flex: 1;
}

@media (width < 1024px) {
    .app__container {
        flex-direction: column;
    }
}
</style>
