<template>
  <div v-if="check == true">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">ชื่อ</span>
      <input
        type="text"
        class="form-control"
        placeholder="ชื่อสินค้า"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="namepro"
      />
    </div>

    <label for="basic-url" class="form-label">URLรูป</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3"
        >https://example.com/</span
      >
      <input
        v-model="image"
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
      />
    </div>
    <div class="input-group mb-3">
      <label class="input-group-text" for="inputGroupSelect01">หมวดหมู่</label>
      <select class="form-select" id="inputGroupSelect01" v-model="catta">
        <option selected>Choose...</option>
        <option value="ขนมร้านดัง & ขนมไทยหาทานยาก">
          ขนมร้านดัง & ขนมไทยหาทานยาก
        </option>
        <option value="ของหวาน & เครื่องดื่มชื่นใจ">
          ของหวาน & เครื่องดื่มชื่นใจ
        </option>
        <option value="กับข้าวกับแกล้มอร่อยทั่วไทย">
          กับข้าวกับแกล้มอร่อยทั่วไทย
        </option>
        <option value="ผลไม้แปรรูป & น้ำจิ้มแซ่บๆ">
          ผลไม้แปรรูป & น้ำจิ้มแซ่บๆ
        </option>
      </select>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">ราคา$</span>
      <input
        v-model="price"
        type="number"
        class="form-control"
        aria-label="Amount (to the nearest dollar)"
      />
    </div>

    <div class="input-group">
      <span class="input-group-text">คำอธิบาย</span>
      <textarea
        class="form-control"
        aria-label="With textarea"
        v-model="description"
      ></textarea>
    </div>
    <button type="button" @click="addData()" class="btn btn-primary">
      add
    </button>
    {{ id }}
    <div class="row m-auto">
      <div class="col-md-4 my-5">
        <div class="card mb-4 product-wap rounded-0">
          <div class="card rounded-0">
            <img class="rounded mx-auto d-block" height="300" :src="image" />
            <div
              class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
            >
              <ul class="list-unstyled">
                <li>
                  <a class="btn btn-pink text-white" href="####"
                    ><i class="far fa-heart"></i
                  ></a>
                </li>
                <li>
                  <a class="btn btn-pink text-white mt-2" href="####"
                    ><i class="far fa-eye"></i
                  ></a>
                </li>
                <li>
                  <a class="btn btn-pink text-white mt-2" href="####"
                    ><i class="fas fa-cart-plus"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <a href="###" class="h3 text-decoration-none">{{ namepro }}</a>
            <ul class="w-100 list-unstyled d-flex text-black-50 mb-0">
              {{
                catta
              }}
            </ul>
            <ul class="list-unstyled d-flex text justify-content-center mb-1">
              <li></li>
              <li>฿{{ price }} บาท</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  collection,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../plngins/firebaselnit";
import { onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      product: [],
      namepro: "",
      image: "",
      title: "",
      description: "",
      uid: "",
      check: false,
      id: null,
      catta: "",
      price: 0,
    };
  },
  async mounted() {
    this.toTop();
    this.checklogin();
    this.readData();
  },

  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    loadOnce() {
      location.reload();
    },
    checklogin() {
      onAuthStateChanged(auth, (user) => {
        if (user && user.uid == "Cfrkx1eEoZN7SJCBE24kIbfvjr83") {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.uid = user.uid;
          console.log(this.uid);
          this.check = true;
          // ...
        } else {
          // User is signed out
          this.check = false;
          this.$router.replace("/");
        }
      });
    },
    async readData() {
      this.product = [];
      const q = query(collection(db, "product"), orderBy("id", "asc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.product.push(doc.data());
      });
      this.id = this.product.length + 1;
    },
    async addData() {
      try {
        const newdocRef = await doc(db, "product", this.id.toString());
        await setDoc(newdocRef, {
          id: this.id,
          namepro: this.namepro,
          image: this.image,
          title: this.title,
          catta: this.catta,
          price: this.price,
        });
        console.log("Document written with ID: ", newdocRef.id);
        alert("เพิ่มสำเร็จ");
        this.namepro = "";
        this.image = "";
        this.title = "";
        this.description = "";
        this.id = null;
        this.catta = "";
        this.price = 0;
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("มีปัญหา");
      }
      this.readData();
    },
    async deleteData(id) {
      await deleteDoc(doc(db, "product", id));
      this.readData();
    },
  },
};
</script>
