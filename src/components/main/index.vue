<template>
  <div class="container">
    <span v-if="!!userId">User ID: {{ userId }}</span>
    <span v-else>Wait, generating new user</span>
    <div v-if="!!userId" class="record-wrapper">
      <RecordForm @added="getRecords" />
    </div>
    <div v-if="records && records.length" class="record-list">
      <h2>Your previous records</h2>
      <div class="record-list-wrapper">
        <div v-for="(record, index) in records" :key="index" class="record-list-item-wrapper">
          <RecordList :record="record" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getNewUser, getUserRecords} from "@/api";
import RecordForm from "@/components/main/libs/RecordForm";
import RecordList from "@/components/main/libs/RecordList";

export default {
  name: "MainSection",
  components: {RecordList, RecordForm},
  data() {
    return {
      isOld: false,
      userId: parseInt(this.$cookie.get('user_id')),
      records: [],
    }
  },
  methods: {
    async getRecords() {
      this.records = await getUserRecords(this.userId);
    }
  },
  async mounted() {
    if (!this.userId) {
      this.userId = await getNewUser();
      this.$cookie.set('user_id', this.userId);
    } else {
      await this.getRecords();
    }
  },
}
</script>

<style scoped>
.record-list-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.record-list-item-wrapper {
  max-width: 250px;
  margin: 5px 15px 5px 0;
  flex: 1 0 21%; /* explanation below */
}
</style>
