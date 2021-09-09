import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import NormalComment from './components/NormalComment';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <Post/>
        <NormalComment/>


      </div>
    </div>
  );
}

export default App;
