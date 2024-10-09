<script setup>
import { useTemplateRef, ref } from 'vue'
import MainLaout from '@/layouts/MainLayout.vue'
import { useEmployeeStore } from '../stores/employee'
import router from '@/router';

const employeeStore = useEmployeeStore()
const data = ref(
    {
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/8345/8345328.png',
        name: '',
        gender: '',
        birthday: '',
        address: '',
        startDate: '',
        position: '',
        salary: 0,
    }
)
function save () {
    let errMassage = valid()
    if (errMassage.length == 0) {
        employeeStore.addEmployee(data.value)
        alert('success')
        router.push({ path: `/` })
    } else {
        let strErr = 'กรุณากรอกข้อมูล'
        for (let i=0;i<errMassage.length;i++){
            strErr = strErr + '\n' + errMassage[i]
        }
        alert(strErr)
    }
}
function valid () {
    let errMassage = []
    !data.value.imgUrl ? errMassage.push('-imgUrl') : ''
    !data.value.name ? errMassage.push('-name') : ''
    !data.value.gender ? errMassage.push('-gender') : ''
    !data.value.birthday ? errMassage.push('-birthday') : ''
    !data.value.address ? errMassage.push('-address') : ''
    !data.value.startDate ? errMassage.push('-startDate') : ''
    !data.value.position ? errMassage.push('-position') : ''
    !data.value.salary ? errMassage.push('-salary') : ''
    return errMassage
}
</script>

<template>
    <MainLaout>
        <div class="card bg-base-100 shadow-xl mx-auto" style="max-width: 800px;">
            <div class="card-body">
                <h2 class="card-title text-center">New Employee</h2>
                <!-- <form ref="form"> -->
                    <div class="avatar justify-center">
                        <div class="mask mask-squircle h-36 w-36">
                            <img
                            :src="data.imgUrl"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <label>ImgUrl</label>
                    <input type="text" placeholder="ImgUrl" class="input input-bordered w-full" v-model="data.imgUrl"/>
                    <label>Name</label>
                    <input type="text" placeholder="Name" class="input input-bordered w-full" v-model="data.name" required/>
                    <label>Gender</label>
                    <select class="select select-bordered w-full" v-model="data.gender">
                        <option disabled selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label>Birthday</label>
                    <input type="date" placeholder="Birthday" class="input input-bordered w-full" v-model="data.birthday" />
                    <label>Address</label>
                    <input type="text" placeholder="Address" class="input input-bordered w-full" v-model="data.address" />
                    <label>StartDate</label>
                    <input type="date" placeholder="StartDate" class="input input-bordered w-full" v-model="data.startDate" />
                    <label>Job position</label>
                    <input type="text" placeholder="Job position" class="input input-bordered w-full" v-model="data.position" />
                    <label>Salary</label>
                    <input type="number" placeholder="Salary" class="input input-bordered w-full" v-model="data.salary" />
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary" @click="save">Save</button>
                    </div>
                <!-- </form> -->
            </div>
        </div>
        
    </MainLaout>
</template>