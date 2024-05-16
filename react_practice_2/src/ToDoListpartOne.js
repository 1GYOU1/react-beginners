//to do list practice
import { useState } from "react";

function ToDoListpartOne() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);//기본값은 비어있는 배열
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();//form은 submit 이벤트를 갖고 있기 때문에 evernt.preventDefault() 함수를 이용하여 기본 동작을 막자.
        if (toDo === "") {
        return;//toDo가 비어있으면 함수가 작동하지않도록 return
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        //현재의 state가 들어간 새로운 array를 리턴해주는 역할을 한다. 즉 이 array에는 todo와 이전의 toDos를 가지게 됨
        setToDo("");
        /*
            마지막에 setToDo("")을 통해 button을 누르면 toDo(input)를 빈칸으로 만들도록 한다.
            todo = ''; 데이터를 직접 수정X, 데이터를 수정해주는 함수(setToDo)를 이용해서 값을 변경해야 함.
        */
    };
    const deleteBtn = (index) => {
        setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
    };
    //단순히 부모요소를 삭제하는게 아닌 배열에 들어가있는 index와 삭제할(버튼의 li) index를 찾아서 삭제할 경우 (filter함수 사용)
    console.log(toDos);
    console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
    return (
        <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input
            onChange={onChange}
            value={toDo}
            type="text"
            placeholder="Write your to do..."
            />
            <button>Add To Do</button>
        </form>
        <hr/>
            <ul>
                {toDos.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => deleteBtn(index)}>❌</button>
                    {/* 
                        onClick={deleteBtn} 이 아닌onClick={() => deleteBtn(index)} 
                        이렇게 쓰는 이유는 "바로 실행"되지 않고 클릭을 기다리는 함수로 쓰기 위함
                    */}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoListpartOne;