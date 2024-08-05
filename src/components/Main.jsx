import DiceButton from "./DiceButton";
import ResetButton from "./ResetButton";

function Main() {


    return (
        <main className="page">
            <section className="board">
                <div className="cell"><div className="grogu">👣</div></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </section>    
            <section className="goods-container">
                <div className="goods-item">🍪</div>
                <div className="goods-item">🍪</div>
                <div className="goods-item">🍪</div>
            </section>
            <section className="goods-container">
                <div className="goods-item">🥚</div>
                <div className="goods-item">🥚</div>
                <div className="goods-item">🥚</div>
            </section>
            <section className="goods-container">
                <div className="goods-item">🐸</div>
                <div className="goods-item">🐸</div>
                <div className="goods-item">🐸</div>
            </section>    
            
        </main>
    );
}

export default Main;