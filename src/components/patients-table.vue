<template>
    <VSheet elevation="3" rounded="xl">
        <VTable fixed-header class="table">
            <thead>
                <tr>
                    <th>IDS</th>
                    <th>Дата регистрации</th>
                    <th>Пациент</th>
                    <th>Заказчик</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="patient in patients"
                    :key="patient.id"
                    :style="{ backgroundColor: patient.color ?? '#0000' }"
                >
                    <td>{{ patient.id }}</td>
                    <td>{{ patient.registrationDate.toLocaleDateString("RU-ru") }}</td>
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
        patients: { type: Array as () => Patient[], required: true },
    },
});
</script>

<style lang="css" scoped>
.table {
    height: calc(100dvh - 135px);
    min-height: 500px;
}
</style>