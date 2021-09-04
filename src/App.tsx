import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [os, setOS] = useState('Unknown')
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  function getOperatingSystem(window: any) {
    let operatingSystem = 'Unknown';
    if (window.navigator.appVersion.indexOf('Win') !== -1) { operatingSystem = 'Windows'; }
    if (window.navigator.appVersion.indexOf('Mac') !== -1) { operatingSystem = 'MacOS'; }
    if (window.navigator.appVersion.indexOf('X11') !== -1) { operatingSystem = 'UNIX'; }
    if (window.navigator.appVersion.indexOf('Linux') !== -1) { operatingSystem = 'Linux'; }
    
    return operatingSystem;
  }

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    if (width <= 768) {
      setIsMobile(true);
    }
  }

  function handleOperatingSystem() {
    setOS(getOperatingSystem(window));
  }


  useEffect(() => {
    async function getData() {
      handleOperatingSystem();
      handleWindowSizeChange();

      if (isMobile === true) {
        if (os === 'Linux' || os === 'UNIX') {
          setOS('Android');
        } else {

        }
        switch(os) {
          case 'Linux':
          case 'UNIX':
            setOS('Android or mobile Linux');
            break;
          case 'MacOS':
            setOS('iOS');
        }
      }
      console.log(os);
    };

    getData().then(() => console.log('Set data'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          os === 'Unknown' ?
            <h1 className="title disable-select">Ja nimam pou kurca pojma kaj uporablaš. Get help.</h1>
            :
            os === 'Windows' ?
              <h1 className="title disable-select">Uporablaš {os}... Prsežm da si res bogi.</h1>
              :
              <h1 className="title disable-select">Uporablaš {os}. Nisi bogi, lep dan.</h1>
        }
        <p className="text disable-select">Če prhajaš iz simketouga TikToka, ja, ja si bogi. Get help></p>
      </header>
    </div>
  );
}

export default App;
