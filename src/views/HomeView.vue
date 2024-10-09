<script setup>
import MainLaout from '@/layouts/MainLayout.vue'
import { RouterLink, RouterView } from 'vue-router'
import { useEmployeeStore } from '../stores/employee'
import router from '@/router';
const employeeStore = useEmployeeStore()

function toDetail (id) {
    router.push({ path: `/detail/${id}` })
}
</script>

<template>
    <MainLaout>
        <div class="card bg-base-100 shadow-xl mx-auto" style="max-width: 800px;">
            <div class="card-body">
                <h2 class="card-title text-center">List Employee</h2>
                <table class="table">
                    <!-- head -->
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <!-- <input type="checkbox" class="checkbox" /> -->
                            No.
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Job position</th>
                        <th>salary</th>
                        <th>
                            <RouterLink to="add" class="btn btn-primary">New</RouterLink>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <td v-if="employeeStore.employee.length == 0">
                            <label>
                                no data.
                            </label>
                        </td>
                    <tr v-else v-for="(item, index) in employeeStore.employee" :key="item" :index="index">
                        <th>
                        <label>
                            <!-- <input type="checkbox" class="checkbox" /> -->
                            {{ index+1 }}
                        </label>
                        </th>
                        <td>
                        <div class="flex items-center gap-3">
                            <div class="avatar">
                            <div class="mask mask-squircle h-12 w-12">
                                <img
                                :src="item.imgUrl"
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div class="font-bold">{{ item.name }}</div>
                            <div class="text-sm opacity-50">{{ item.address }}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {{ item.position }}
                        <!-- <br />
                        <span class="badge badge-ghost badge-sm">Desktop Support Technician</span> -->
                        </td>
                        <td>{{ item.salary }}</td>
                        <th>
                        <button class="btn btn-xs" @click="toDetail(index)">details</button>
                        </th>
                    </tr>
                    </tbody>
                    <!-- foot -->
                    <tfoot>
                    
                    </tfoot>
                </table>
            </div>
        </div>
    </MainLaout>
</template>