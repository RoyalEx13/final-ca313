<template>
  <div
    class="modal fade bg-white"
    id="templatemo_search"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="w-100 pt-1 mb-5 text-right">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <form
        action=""
        method="get"
        class="modal-content modal-body border-0 p-0"
      >
        <div class="input-group mb-2">
          <input
            type="text"
            class="form-control"
            id="inputModalSearch"
            name="q"
            placeholder="Search ..."
          />
          <button type="submit" class="input-group-text bg-success text-light">
            <i class="fa fa-fw fa-search text-white"></i>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Start Content -->
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3">
        <h1 class="h2 pb-4">Categories</h1>
        <ul class="list-unstyled templatemo-accordion">
          <li class="pb-3">
            <p
              type="button"
              class="collapsed d-flex justify-content-between h3 text-decoration-none"
              vaul="1"
              @click="cattalogf(1)"
            >
              ทั้งหมด
            </p>
            <p
              type="button"
              class="collapsed d-flex justify-content-between h3 text-decoration-none"
              @click="cattalogf(2)"
            >
              ขนมร้านดัง & ขนมไทยหาทานยาก
            </p>
            <p
              type="button"
              class="collapsed d-flex justify-content-between h3 text-decoration-none"
              @click="cattalogf(3)"
            >
              ของหวาน & เครื่องดื่มชื่นใจ
            </p>
            <p
              type="button"
              class="collapsed d-flex justify-content-between h3 text-decoration-none"
              @click="cattalogf(4)"
            >
              กับข้าวกับแกล้มอร่อยทั่วไทย
            </p>
            <p
              type="button"
              class="collapsed d-flex justify-content-between h3 text-decoration-none"
              @click="cattalogf(5)"
            >
              ผลไม้แปรรูป & น้ำจิ้มแซ่บๆ
            </p>
          </li>
        </ul>
      </div>

      <div class="col-lg-9">
        <!-- <div class="row">
          <div class="col-md-6 pb-4">
            <div class="d-flex">
              <select class="form-control" v-model="ab" @change="chght()">
                <option value="1">ล่าสุด</option>
                <option value="2">ราคาต่ำ-สูง</option>
                <option value="3">ราคาสูง-ต่ำ</option>
              </select>
            </div>
          </div>
        </div> -->
        <div class="row">
          <div
            class="col-md-4 d-flex justify-content-center"
            v-for="(product, index) in product"
            :key="index"
          >
            <div class="card mb-4 product-wap rounded-0" v-if="index < page">
              <div class="card rounded-0">
                <img
                  class="rounded mx-200 d-block"
                  height="300"
                  :src="product.image"
                />
                <div
                  class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                >
                  <ul class="list-unstyled">
                    <!-- <li>
                      <a
                        class="btn btn-pink text-white"
                        @click="goto(product.id)"
                        ><i class="far fa-heart"></i
                      ></a>
                    </li> -->
                    <li>
                      <a
                        class="btn btn-pink text-white mt-2"
                        @click="goto(product.id)"
                        ><i class="far fa-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        class="btn btn-pink text-white mt-2"
                        @click="goto(product.id)"
                        ><i class="fas fa-cart-plus"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <a @click="goto(product.id)" class="h3 text-decoration-none">{{
                  product.namepro
                }}</a>
                <ul class="w-100 list-unstyled d-flex text-black-50 mb-0">
                  {{
                    product.catta
                  }}
                </ul>
              </div>
              <ul class="list-unstyled d-flex text justify-content-center mb-1">
                <li class="text-lowercase">฿{{ product.price }} บาท</li>
              </ul>
            </div>
          </div>
          <div div="row" v-if="page <= product.length">
            <ul class="pagination pagination-lg justify-content-center">
              <li class="page-item">
                <a class="btn btn-outline-secondary" @click="nextpage()"
                  >เพิ่มเติม</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Content -->
</template>

<script>
import {
  // collection,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import { db, auth } from "../plngins/firebaselnit";
import { onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      baskeT: [],
      product: [],
      page: 9,
      // ab: 1,
      // short: [
      //   { taget: 'id"', sh: "asc" },
      //   { taget: "price", sh: "asc" },
      //   { taget: "price", sh: "desc" },
      // ],
      // sort: { taget: "id", sh: "asc" },
      cattalog: [
        "ขนมร้านดัง & ขนมไทยหาทานยาก",
        "ของหวาน & เครื่องดื่มชื่นใจ",
        "กับข้าวกับแกล้มอร่อยทั่วไทย",
        "ผลไม้แปรรูป & น้ำจิ้มแซ่บๆ",
      ],
    };
  },
  async mounted() {
    this.toTop();
    this.readData();
    this.checklogin();
  },

  methods: {
    loadOnce() {
      location.reload();
    },
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
    cattalogf(catta) {
      if (catta == 1) {
        this.cattalog = [
          "ขนมร้านดัง & ขนมไทยหาทานยาก",
          "ของหวาน & เครื่องดื่มชื่นใจ",
          "กับข้าวกับแกล้มอร่อยทั่วไทย",
          "ผลไม้แปรรูป & น้ำจิ้มแซ่บๆ",
        ];
        this.page = 9;
      } else if (catta == 2) {
        this.cattalog = ["ขนมร้านดัง & ขนมไทยหาทานยาก"];
        this.page = 9;
      } else if (catta == 3) {
        this.cattalog = ["ของหวาน & เครื่องดื่มชื่นใจ"];
        this.page = 9;
      } else if (catta == 4) {
        this.cattalog = ["กับข้าวกับแกล้มอร่อยทั่วไทย"];
        this.page = 9;
      } else if (catta == 5) {
        this.cattalog = ["ผลไม้แปรรูป & น้ำจิ้มแซ่บๆ"];
        this.page = 9;
      } else {
        console.log("error");
      }
      this.readData();
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    // chght() {
    //   this.sort = this.short[parseInt(this.ab) - 1];
    // },
    goto(indexs) {
      this.$router.push({
        name: "shop",
        params: { data: indexs },
      });
    },
    nextpage() {
      this.page = this.page + 9;
    },
    async readData() {
      this.product = [];
      const q = query(
        collection(db, "product"),
        where("catta", "in", this.cattalog)
        // orderBy(this.sort.taget, this.sort.sh)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data.orderBy("price", "asc");
        this.product.push(doc.data());
      });
    },
    add(title, price, unit) {
      if (this.uid == "") {
        alert("ต้องทำการเข้าสู่ระบบก่อน");
      } else {
        for (let i = 0; i < unit; i++) {
          for (let xx of this.baskeT) {
            if (xx.title == title) {
              xx.cont++;
              return;
            }
          }
          this.$router.push({
            params: { baskeT: this.baskeT },
          });
        }
      }
      console.log(this.baskeT);
    },
  },
};
</script>
