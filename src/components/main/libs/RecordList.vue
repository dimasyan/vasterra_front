<template>
  <div class="record-list-item">
    <el-card v-if="record">
      <span>Date: {{ record.date }}</span>
      <span>Name: {{ record.name }}</span>
      <span>Surname: {{ record.surname }}</span>
      <span>Email: {{ record.email }}</span>
      <span>Type: {{ localeType }}</span>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "RecordList",
  props: ["record"],
  computed: {
    localeType() {
      if (this.record.type === 'attorney') return 'Доверенность';
      if (this.record.type === 'heritage') return 'Наследство';
      return 'Справка';
    }
  },
}
</script>

<style>
.el-card__body {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>
