<template>
  <div v-if="check == true">
    <h5>เข้าสู่ระบบ สำเร็จ</h5>
    <button type="button" @click="logout()" class="btn btn-outline-danger">
      Logout
    </button>
  </div>
  <div v-else-if="check == 3">
    <form>
      <div class="mb-3 mx-2">
        <h5>สมัครสมาชิก</h5>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="button" @click="createUser()" class="btn btn-primary">
        สมัครสมาชิก
      </button>
    </form>
  </div>
  <div v-else div class="card">
    <div class="mx-2 my-2">
      <form>
        <div class="mb-3 mx-2">
          <h5>Login</h5>
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
          <button type="button" @click="resing()" class="btn btn-link">
            สมัครสมาชิก
          </button>
        </div>
        <button type="button" @click="login()" class="btn btn-primary">
          Login
        </button>
      </form>
      or
      <img
        src="https://www.facebook.com/images/fb_icon_325x325.png"
        height="30"
        type="button"
        @click="loginFacebook()"
        class="my-2"
      />
    </div>
  </div>
</template>

<script>
import {
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../plngins/firebaselnit";

export default {
  data() {
    return {
      email: "",
      password: "",
      uid: "",
      check: false,
    };
  },
  async mounted() {
    this.checklogin();
  },

  methods: {
    resing() {
      this.check = 3;
    },
    createUser() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.checklogin();
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode + " " + errorMessage + "   ");
        });
    },
    // loadOnce() {
    //   location.reload();
    // },
    logout() {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.replace("/");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
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
    loginFacebook() {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const Token = credential.accessToken;
          const user = result.user;
          console.log("Facebook token = " + Token);
          console.log(user);
          this.loadOnce();
          // this.checklogin();
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.email;
          // // The AuthCredential type that was used.
          // const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
          console.log(errorCode + " " + errorMessage + "   ");
        });
    },

    login() {
      // const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("completUser = " + user + this.email + this.password);
          alert("เข้าสู่ระบบ สำเร็จ");
          this.loadOnce();
          this.checklogin();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(
            errorCode + " " + errorMessage + "   " + this.email + this.password
          );
        });
    },
  },
};
</script>
