<script setup>
import { useTemplateRef, ref } from 'vue'
import MainLaout from '@/layouts/MainLayout.vue'
import { useEmployeeStore } from '../stores/employee'
import { useRoute } from 'vue-router'
import router from '@/router';


const route = useRoute()
const id = route.params.id
const employeeStore = useEmployeeStore()
const data = ref(
    {
        imgUrl: '',
        name: '',
        gender: '',
        birthday: '',
        address: '',
        startDate: '',
        position: '',
        salary: 0,
    }
)
getData ()
function getData () {
    data.value.imgUrl = employeeStore.employee[id].imgUrl
    data.value.name = employeeStore.employee[id].name
    data.value.gender = employeeStore.employee[id].gender
    data.value.birthday = employeeStore.employee[id].birthday
    data.value.address = employeeStore.employee[id].address
    data.value.startDate = employeeStore.employee[id].startDate
    data.value.position = employeeStore.employee[id].position
    data.value.salary = employeeStore.employee[id].salary
}

function save () {
    let errMassage = valid()
    if (errMassage.length == 0) {
        employeeStore.updateEmployee(id,data.value)
        editStatus.value = true
        menuStatus.value = true
        alert('success')
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

const menuStatus = ref(true)
const editStatus = ref(true)
function cancle () {
    menuStatus.value = true
    editStatus.value = true
    getData ()
}

const alertStatus = ref(false)
function remove () {
    employeeStore.removeEmployee(id)
    router.push({ path: `/` })
}
</script>

<template>
    <MainLaout>
        <div v-if="alertStatus" style="position: fixed; height: 100%; width: 100%; z-index: 1; left: 50%;top: 50%;transform: translate(-50%, -50%);background-color: #00000070;">
            <div class="card bg-base-100 shadow-xl w-96" style="position: fixed;left: 50%;top: 50%;transform: translate(-50%, -50%)">
                <div class="card-body">
                    <h2 class="card-title justify-center">Delete Employee!</h2>
                    <br>
                    <div class="card-actions justify-center">
                        <button class="btn" @click="{alertStatus = !alertStatus; menuStatus = !menuStatus}">Cancel</button>
                        <button class="btn btn-secondary" @click="remove">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-base-100 shadow-xl mx-auto" style="max-width: 800px;">
            <div class="card-body">
                <div class="grid grid-cols-2 gap-4">
                    <div class="...">
                        <h2 class="card-title text-center">Detail Employee</h2>
                    </div>
                    <div class="... text-end">
                        <div v-if="menuStatus" class="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="btn btn-accent m-1">Manage</div>
                            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li @click="{menuStatus = !menuStatus; editStatus = !editStatus}"><a>Edit</a></li>
                                <li @click="{alertStatus = !alertStatus; menuStatus = !menuStatus}"><a>Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <form ref="form"> -->
                    <div class="avatar justify-center">
                        <div class="mask mask-squircle h-36 w-36">
                            <img
                            :src="data.imgUrl"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <label>ImgUrl</label>
                    <input type="text" placeholder="ImgUrl" class="input input-bordered w-full" v-model="data.imgUrl" :readonly="editStatus"/>
                    <label>Name</label>
                    <input type="text" placeholder="Name" class="input input-bordered w-full" v-model="data.name" :readonly="editStatus"/>
                    <label>Gender</label>
                    <input v-if="editStatus" type="text" placeholder="gender" class="input input-bordered w-full" v-model="data.gender" :readonly="editStatus"/>
                    <select v-else class="select select-bordered w-full" v-model="data.gender">
                        <option disabled selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <label>Birthday</label>
                    <input type="date" placeholder="Birthday" class="input input-bordered w-full" v-model="data.birthday" :readonly="editStatus"/>
                    <label>Address</label>
                    <input type="text" placeholder="Address" class="input input-bordered w-full" v-model="data.address" :readonly="editStatus"/>
                    <label>StartDate</label>
                    <input type="date" placeholder="StartDate" class="input input-bordered w-full" v-model="data.startDate" :readonly="editStatus"/>
                    <label>Job position</label>
                    <input type="text" placeholder="Job position" class="input input-bordered w-full" v-model="data.position" :readonly="editStatus"/>
                    <label>Salary</label>
                    <input type="number" placeholder="Salary" class="input input-bordered w-full" v-model="data.salary" :readonly="editStatus"/>
                    <div class="card-actions justify-end">
                        <!-- <button v-if="editStatus" class="btn btn-primary" @click="editStatus = !editStatus">Edit</button> -->
                        <button v-if="!editStatus" class="btn btn" @click="cancle">Cancle</button>
                        <button v-if="!editStatus" class="btn btn-primary" @click="save">Save</button>
                    </div>
                <!-- </form> -->
            </div>
        </div>
        
    </MainLaout>
</template>