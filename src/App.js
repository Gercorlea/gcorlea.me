import style from "./App.module.css";

function App() {
  return (
    <div className={style["todo"]}>
      <div className={style["card"]}>
        <div className={style["content"]}>
          <div className={style["front"]}>
            <h3 className={style["title"]}>Gera Cortes</h3>
            <p className={style["subtitle"]}>More About Me</p>
          </div>

          <div className={style["back"]}>
            <p className={style["description"]}>
          Bachelor of Science in Computer Science and Technology Student

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
