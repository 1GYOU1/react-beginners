import { useState, useEffect } from "react";

function Hello() {
  //일반 함수형식
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);

  //화살표 함수형식 -> 더 짧고 간편
    useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");//컴포넌트가 파괴될때 실행될 함수
  }, []);
    return <h1>Hello</h1>;
}

function Cleanup() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
    <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
    );
}

export default Cleanup;