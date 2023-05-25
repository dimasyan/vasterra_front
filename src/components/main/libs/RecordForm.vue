<template>
  <div class="record-form">
    <h2 class="record-form-title">Add new form</h2>
    <el-form ref="form" :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Surname">
        <el-input v-model="form.surname" />
      </el-form-item>
      <el-form-item label="E-mail">
        <el-input v-model="form.email" type="email" />
      </el-form-item>
      <el-form-item label="Date">
        <el-date-picker type="date" placeholder="Pick a date" v-model="form.date" />
      </el-form-item>
      <el-form-item label="Type">
        <el-select v-model="form.type" placeholder="please select your type">
          <el-option label="Доверенность" value="attorney"></el-option>
          <el-option label="Наследство" value="heritage"></el-option>
          <el-option label="Справка" value="info"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { format} from 'date-fns'
import {addRecord} from "@/api";

export default {
  name: "RecordForm",
  data() {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        date: '',
        type: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      const formattedDate = format(new Date(this.form.date), 'yyyy-MM-dd');
      const response = await addRecord({
        ...this.form,
        date: formattedDate,
        user_id: parseInt(this.$cookie.get('user_id'))
      });
      console.log(response);
      if (response) {
        this.$emit('added');
      }
    }
  }
}
</script>

<style scoped>
.record-form {
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
}
</style>
