import './App.css';


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'tableau-viz': {
        id: string
        src: string
        children?: never[]
      }
    }

  }
}

function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="w-[900px] border-2">
            <a href="https://help.tableau.com/current/api/embedding_api/en-us/index.html"><h2
              className="text-blue-700 text-3xl text-center w-full p-4">Tableau POC using Tableau Embedding API v3
            </h2>
            </a>
            <p>Table shared publicly</p>
            <div className="">
              <tableau-viz id="tableauViz"
                           src="http://public.tableau.com/views/RegionalSampleWorkbook/Storms">
              </tableau-viz>
            </div>
          </div>
          <p className="text-center w-[900px] pt-20">Table shared privately, need to log in to Tableau Cloud to view</p>
          <div className="w-[900px] border-2 ">


            <tableau-viz id='tableau-viz' src='https://prod-useast-b.online.tableau.com/t/pwwtest/views/workbook/Sheet1'
            ></tableau-viz>
          </div>

        </header>
      </div>
    </>
  );
}

export default App;
