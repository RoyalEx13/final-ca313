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

  <section class="bg-pink py-5">
    <div class="container">
      <div class="row align-items-center py-5">
        <div class="col-md-8 text-white">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="col-md-4">
          <img
            src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.15752-9/274722071_970864530457553_6462074109121752508_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeF-3Zy2eJTktuarb1YMqMVTF8EkwTAg164XwSTBMCDXrpvv2IbVz8MjsAEdcTrBYFCMe5bdT1eVNYcwMp5-wrS-&_nc_ohc=nb7ZNcDEYQ0AX9_QuPn&tn=tKb_RwPL5KgCC2W1&_nc_ht=scontent.fbkk8-4.fna&oh=03_AVITqIRyqYKAPuQJR1UrAj9WX9_CbEirF6Yqk0WMFTNgSQ&oe=625D5545"
            alt="About Hero"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Close Banner -->
  <div class="row">
    <img
      class="rounded mx-auto d-block"
      src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/250854474_1210776346077020_1267985845960277337_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeH4GzUyeoHl4x2PZbjjxdetTXec_EVJDbRNd5z8RUkNtI6KU_SAchxmqm0FcQtCgyyljU4t8XozsrXxNLN9CH6c&_nc_ohc=tFVprii7VIwAX8PqaFk&_nc_oc=AQmh6W526kE4gkqnZaWKTCd7N7LMdpIx4ViOi1oNTsRBTeTkRWxB4Pa6hvBPW-c0-Bs&_nc_ht=scontent.fbkk12-1.fna&oh=00_AT9q-LIR7AyqIwr2rewJx1D36d9vKg8ktAcD_4DMthP8IA&oe=623B1301"
    />
    <!-- Ena Map -->
  </div>

  <!-- Start Section -->
  <section class="container py-5">
    <div class="row text-center pt-5 pb-3">
      <div class="col-lg-6 m-auto">
        <h1 class="h1">บริการของเรา</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-3 pb-5">
        <div class="h-100 py-5 services-icon-wap shadow">
          <div class="h1 text-pink text-center">
            <i class="fa fa-smile fa-lg"></i>
          </div>
          <h2 class="h5 mt-4 text-center">Smile</h2>
        </div>
      </div>

      <div class="col-md-6 col-lg-3 pb-5">
        <div class="h-100 py-5 services-icon-wap shadow">
          <div class="h1 text-pink text-center">
            <i class="fas fa-home"></i>
          </div>
          <h2 class="h5 mt-4 text-center">Shop</h2>
        </div>
      </div>

      <div class="col-md-6 col-lg-3 pb-5">
        <div class="h-100 py-5 services-icon-wap shadow">
          <div class="h1 text-pink text-center">
            <i class="fa fa-motorcycle fa-lg"></i>
          </div>
          <h2 class="h5 mt-4 text-center">Delivery</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  // collection,
  getDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "../plngins/firebaselnit";
import { onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      csDoc: [],
      uid: "",
      number: 0,
    };
  },
  async mounted() {
    this.checklogin();
  },

  methods: {
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
      this.csDoc = [];
      const docRef = doc(db, "cart", this.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        this.csDoc.push(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      // const querySnapshot = await getDocs(collection(db, "cart"));
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      //   this.csDoc.push(doc.data());
      // });
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
