import './App.css';
<link href="heroes.css" rel="stylesheet"></link>




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="titulo">POMODORO TIMER</h1>
        <div className="Card">
          <h2>25:00</h2>
          


          <button className="btn-primary" type="button">START</button>
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">RESET</button>



        </div>

      </header>
    </div>
  );
}

export default App;
