import React from 'react'

import TitleHeader from '../../Components/FrontEnd/Header/TitleHeader';
import PostMenu from '../../Components/FrontEnd/PostMenu/PostMenu'
import Post from '../../Components/FrontEnd/Post/Post';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

import './App.css';

const initFirebase = () =>
{
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = 
  {
    apiKey: "AIzaSyAXCei01SEMvLkt2TQ8-hwO0y6HVlPSbys",
    authDomain: "blog-4df4a.firebaseapp.com",
    databaseURL: "https://blog-4df4a-default-rtdb.firebaseio.com",
    projectId: "blog-4df4a",
    storageBucket: "blog-4df4a.appspot.com",
    messagingSenderId: "441218755914",
    appId: "1:441218755914:web:8b5eeac6541f44e114a5b3",
    measurementId: "G-KSNYEYQCF0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const storage = getStorage(app);
}

const App = () => 
{  
  const [postFile, setPostFile] = React.useState('defaultPost.md');
  
  return(
    <div className="App">
      <TitleHeader />
      <PostMenu setPostFile={setPostFile}/>
      <Post postPath={postFile}/>
    </div>
  );
}

export default App;