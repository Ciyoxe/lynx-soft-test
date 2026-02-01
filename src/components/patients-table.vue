<template>
    <VSheet elevation="3" rounded="xl">
        <VTable fixed-header class="patients-table__table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Дата регистрации</th>
                    <th>Пациент</th>
                    <th>Заказчик</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="patients.length === 0">
                    <td colspan="4" class="text-center text-medium-emphasis">
                        {{ hasFilters ? "Нет значений по выбранным фильтрам" : "Задайте фильтр для отображения" }}
                    </td>
                </tr>
                <tr
                    v-for="patient in patients"
                    :key="patient.id"
                    :style="{ backgroundColor: patient.color ?? '#0000' }"
                >
                    <td>{{ patient.id }}</td>
                    <td>{{ patient.registrationDate.toLocaleDateString("ru-RU") }}</td>
                    <td>{{ patient.name }}</td>
                    <td>{{ patient.customer }}</td>
                </tr>
            </tbody>
        </VTable>
    </VSheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Patient {
    id: number;
    name: string;
    customer: string | null;
    registrationDate: Date;
    color: string | null;
}

export default defineComponent({
    props: {
        hasFilters: { type: Boolean, required: true },
        patients: { type: Array as () => Patient[], required: true },
    },
});
</script>

<style lang="css" scoped>
.patients-table__table {
    height: calc(100dvh - 135px);
    min-height: 500px;
}
</style>
