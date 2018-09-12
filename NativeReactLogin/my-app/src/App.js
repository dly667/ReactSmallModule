import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box">
          <div className="content">
            <div className="title">
              <h2>Create a new account</h2>
              <p>It's free if you share data.</p>
            </div>

            <div className="inputbox">
              <div className="name">
                <input placeholder="First name" />
                <input placeholder="Surname" />
              </div>


              <input placeholder="Affiliation" />
              <input placeholder="Email address" />
              <input placeholder="New password" />

              <button>Sign Up</button>
            </div>


            <div className="message">
            <div>
            <h6>Jake O'Brien</h6>
              <span>1 Aug. 5:34 pm</span>
              </div>
              
              <p>User creates password or gets given a temporary one? For team to decide</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
