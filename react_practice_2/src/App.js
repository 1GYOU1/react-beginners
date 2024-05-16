import { useState, useEffect } from 'react';
import Cleanup from './Cleanup';
import Button from './Button';
import styles from './App.module.css'

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(()=>{
    console.log("I run only once.");
  }, []);//초기에 딱 한번 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);//초기 실행 후 keyword의 변화가 감지될때만 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);//초기 실행 후 counter의 변화가 감지될때만 실행
  return (
    <div>
        <Cleanup/>
        <hr/>
        <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder='Search here...'
        />
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
        <h1 className={styles.title}>Welcome back!!!</h1>
        <hr/>
        <Button text={"continue"}/>
    </div>
  );
}

export default App;