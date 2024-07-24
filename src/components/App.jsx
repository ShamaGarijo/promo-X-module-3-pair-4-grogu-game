// aquí pongo todos mis componentes
// App.jsx es mi componente madre, desde donde surjen las demás

import '../scss/App.scss'; // hay que escribir la ruta
import image from '../images/grogu.webp';


const App = () => {

}  


  return
      <header>
      <h1 class="header-title">¡Cuidado con Grogu!</h1>
      </header>
      <main class="page">
      <section class="board">
        <div class="cell"><div class="grogu">👣</div></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </section>
      <section>
        <button class="dice">Lanzar Dado</button>
        <div class="game-status">En curso</div>
      </section>
      <section class="goods-container">
        <div class="goods-item">🍪</div>
        <div class="goods-item">🍪</div>
        <div class="goods-item">🍪</div>
      </section>
      <section class="goods-container">
        <div class="goods-item">🥚</div>
        <div class="goods-item">🥚</div>
        <div class="goods-item">🥚</div>
      </section>
      <section class="goods-container">
        <div class="goods-item">🐸</div>
        <div class="goods-item">🐸</div>
        <div class="goods-item">🐸</div>
      </section>
      <section>
        <button class="restart-button">Reiniciar Juego</button>
      </section>
      </main>
  


export default App;