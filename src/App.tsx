import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [os, setOS] = useState('Unkown')

  function getOperatingSystem(window: any) {
    let operatingSystem = 'Not known';
    if (window.navigator.appVersion.indexOf('Win') !== -1) { operatingSystem = 'Windows'; }
    if (window.navigator.appVersion.indexOf('Mac') !== -1) { operatingSystem = 'MacOS'; }
    if (window.navigator.appVersion.indexOf('X11') !== -1) { operatingSystem = 'UNIX'; }
    if (window.navigator.appVersion.indexOf('Linux') !== -1) { operatingSystem = 'Linux'; }

    return operatingSystem;
  }

  useEffect(() => {
    async function getOS() {
      setOS(getOperatingSystem(window));
      console.log(os);
    };

    getOS().then(() => console.log('Set OS'));
  }, [os]);

  return (
    <div className="App">
      <header className="App-header">
        {
          os === 'Windows' ?
            <h1 className="title disable-select">Uporablaš {os}... Prsežm da si res bogi.</h1>
            :
            <h1 className="title disable-select">Uporablaš {os}. Nisi bogi, lep dan.</h1>
        }
        <p className="text disable-select">Ja ne vem kaj tuki dt, <a href="https://github.com/aikenahac/bogi.si/issues">piš mi recommendation na github issue</a></p>
      </header>
    </div>
  );
}

export default App;
