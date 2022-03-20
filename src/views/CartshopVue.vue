<template>
  <ul class="list-group" v-for="(item, index) in csDoc" :key="index">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      {{ item.namepro }}
      <span class="d-flex justify-content-between">ราคา :{{ item.price }}</span>
      <span class="d-flex justify-content-between"
        >จำนวน :{{ item.count }}</span
      >
      <span class="d-flex justify-content-between"
        >รวม :{{ item.price * item.count }}</span
      >
      <il class="btn btn-danger" @click="all(index)">x</il>
    </li>
    {{
      sum()
    }}
  </ul>
  <span class="badge rounded-pill text-dark h3">price all :{{ summ }}</span>
  <il class="btn btn-primary justify-content-between text-canter" @click="buy()"
    >ชำระเงิน</il
  >
</template>

<script>
import {
  deleteDoc,
  doc,
  setDoc,
  query,
  where,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../plngins/firebaselnit";
import { onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      summ: 0,
      csDoc: [],
      csDocid: [],
      uid: "",
      check: null,
    };
  },
  created() {
    this.checklogin();
    this.readData();
  },

  methods: {
    updaet() {
      window.location.reload();
    },
    all(i) {
      this.deleteq(i);
    },
    buy() {
      for (let i = 0; i <= this.csDocid.length; i++) {
        this.deleteq(i);
      }
    },
    async deleteq(id) {
      console.log(this.csDocid[id]);

      // Remove the 'capital' field from the document
      await deleteDoc(doc(db, "cart", this.csDocid[id]));
      this.readData();
    },
    sum() {
      this.summ = 0;
      for (let i of this.csDoc) {
        this.summ = this.summ + i.price * i.count;
      }
    },
    checklogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.uid = user.uid;
          console.log(this.uid);
          this.check = true;
          // ...
        } else {
          console.log("logut");
          this.check = false;
        }
      });
    },

    async readData() {
      const q = query(
        collection(db, "cart", this.uid),
        where("id", "!=", this.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.csDoc = [];
        this.csDoc = [];
        querySnapshot.forEach((doc) => {
          this.csDoc.push(doc.data());
          this.csDocid.push(doc.id);
        });
        console.log("Current cities in CA: ", unsubscribe);
      });
    },
    async addData() {
      try {
        const newdocRef = await doc(db, "cart", this.uid);
        await setDoc(newdocRef, {
          id: this.uid,
          number: this.number,
        });
        console.log("Document written with ID: ", newdocRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.readData();
    },
    async deleteData(id) {
      await deleteDoc(doc(db, "csmju", id));
      this.readData();
    },
  },
};
</script>
