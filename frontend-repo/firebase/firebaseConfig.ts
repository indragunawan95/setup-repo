import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPreX33A1R9l4B1_G13EshM38zto_6DvU",
    authDomain: "buddytest-4f33b.firebaseapp.com",
    projectId: "buddytest-4f33b",
    storageBucket: "buddytest-4f33b.appspot.com",
    messagingSenderId: "1089371358905",
    appId: "1:1089371358905:web:98ff58159d46909143fd68"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
