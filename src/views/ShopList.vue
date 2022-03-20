<template>
  <section class="bg-light">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-5 mt-5">
          <div class="card mb-3">
            <img
              class="card-img img-fluid"
              :src="product.image"
              alt="Card image cap"
              id="product-detail"
            />
          </div>
        </div>
        <!-- col end -->
        <div class="col-lg-7 mt-5">
          <div class="card">
            <div class="card-body">
              <h1 class="h2">{{ product.namepro }}</h1>
              <p class="h3 py-2">฿{{ product.price }} บาท</p>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <h6>หวดหมู่:</h6>
                </li>
                <li class="list-inline-item">
                  <p class="text-muted">
                    <strong>{{ product.catta }}</strong>
                  </p>
                </li>
              </ul>
              <h6>Description:</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse. Donec condimentum elementum convallis. Nunc
                sed orci a diam ultrices aliquet interdum quis nulla.
              </p>

              <h6>Specification:</h6>
              <ul class="list-unstyled pb-3">
                <li>Lorem ipsum dolor sit</li>
                <li>Amet, consectetur</li>
                <li>Adipiscing elit,set</li>
                <li>Duis aute irure</li>
                <li>Ut enim ad minim</li>
                <li>Dolore magna aliqua</li>
                <li>Excepteur sint</li>
              </ul>

              <div class="row">
                <div class="col-auto">
                  <ul class="list-inline pb-3">
                    <li class="list-inline-item text-right">Quantity</li>
                    <li class="list-inline-item">
                      <input
                        type="number"
                        v-model="count"
                        class="form-control input-number"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row pb-3">
                <div class="col d-grid">
                  <il
                    class="btn btn-pink"
                    @click="all(product.namepro, product.price)"
                    >ใส่ตระกร้า</il
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  // collection,
  getDoc,
  doc,
  setDoc,
  collection,
} from "firebase/firestore";
import { db, auth } from "../plngins/firebaselnit";
import { onAuthStateChanged } from "firebase/auth";
export default {
  props: ["data"],
  data() {
    return {
      baskeT: [],
      product: [],
      count: null,
      uid: "",
    };
  },
  async mounted() {
    this.toTop();
    this.readData();
    console.log(this.data);
    this.checklogin();
  },

  methods: {
    checklogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.uid = user.uid;
          console.log(this.uid);

          this.check = true;
          // ...
        } else {
          // User is signed out
          console.log("hello");
          this.check = false;
        }
      });
    },
    async all(name, price) {
      console.log(this.baskeT, this.count);
      await this.add(name, price);
      this.addData(name, price);
      this.$router.replace("/");
    },
    lode() {},
    async addData(title, price) {
      // Add a new document with a generated id
      const newCityRef = doc(collection(db, "cart"));

      // later...
      await setDoc(newCityRef, {
        id: this.uid,
        namepro: title,
        price: price,
        count: this.count,
      });
    },
    add() {},
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    backghome() {
      this.$router.replace("/");
    },
    async readData() {
      this.product = [];
      const docRef = doc(db, "product", this.data);
      console.log(this.data);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        this.product = docSnap.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        alert("error");
      }
    },
  },
};
</script>
