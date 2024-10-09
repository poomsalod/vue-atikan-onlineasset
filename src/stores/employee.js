import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    employee: [
      {
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/8345/8345328.png',
        name: 'Employee 1',
        gender: 'male',
        birthday: '2024-10-17',
        address: 'Chiang rai',
        startDate: '2024-10-17',
        position: 'Software Engineer',
        salary: 30000,
      },
    ]
  }),
  actions: {
    addEmployee (data) {
      this.employee.push(data)
    },
    updateEmployee (indax, data) {
      this.employee[indax] = data
    },
    removeEmployee (indax) {
      this.employee.splice(indax,1)
    }
  }
})
