
import logo from './logo.svg';
import './App.css';
import './me.css';
import logo1 from './logo512.png'; 

function App() {
   const app1 = {
        textAlign: "center"
    };

    const header ={
        backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    }
    const logo={
        height: "40vmin",
        pointerEvents: "none",
    }

  //   @media (preferReducedMotion: noPreference) {
  //     const logo {
  //     animation: "App-logo-spin infinite 20s linear",
  //   }
  // }

  // @keyframes App-logo-spin {
  // from {
  //   transform: "rotate(0deg)",
  //   }
  // to {
  //   transform: "rotate(360deg)",
  //   }
  // }
  const link={
    color: "#61dafb",
  }



  return (
    <div style={app1}>
      <header style={header}>
      <h1 className='myname' >Manish Singh</h1>
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          style={link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        

          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
