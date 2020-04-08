import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">ヘッダー(サイトのタイトルなど)</header>
      <main className="main">
        <div className="space1">
          <h1 className="space1Text">領域1</h1>
        </div>
        <div className="space2">
          <p className="space2Text">領域2</p>
        </div>
        <div className="space3">
          <p className="space3Text">領域3</p>
        </div>
        <div className="side">
          <div className="space4">
            <h1 className="space1Text">領域4</h1>
          </div>
          <div className="space5">
            <h1 className="space1Text">領域5</h1>
          </div>
          <div className="space6">
            <h1 className="space1Text">領域6</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
