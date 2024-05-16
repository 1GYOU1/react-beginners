## ReactJS로 영화 웹 서비스 만들기

#### 배우는 이론
- JSX
- State
- Props
- Class Components
- Data Fetching
- Routing

#### 패키지
- "React"
- "Axios"
- "React Router"
- "Github Pages"

#### Github Page : https://1gyou1.github.io/react-movie-app

<br>

# __React JS__

[참고사이트 ① - 벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)

## React CDN

```html
<!--React Js-->
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<!--React DOM-->
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<!--babel-->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## babel 

최신 Javascript(ES6, ES7 등..) 문법을 예전 브라우저에서 표출 시키기 위해 일반 Javascript 문법으로 변환해주는 컴파일러

=> Pure React로 변환해주는 언어

babel 사용시 script type 선언 필수 ★
```html
<script type="text/babel"></script>
```

```js
// babel 사용
const Title = (
	<h3 id="title" onMouseEnter={() => console.log('mouse enter')}>'Hello I am a Title'</h3>
)

//head에 Pure React 자동 컴파일
const h3 = React.createElement('h3', 
	{
		id:'title',
		onMouseEnter: () => console.log('mouse enter'),
	},
	'Hello I am a span'
);
```

## JSX

Javascript 문법을 Xml처럼 사용할 수 있게 해주는 Javascript 확장문법

React.createElement()를 사용하여 객체를 만드는 불편함 해소 및 코드 간소화

```js
const root = document.getElementById('root');

// 일반 함수식으로 변환
function Title(){
	return	(
	<h3 id="title" onMouseEnter={() => console.log('mouse enter')}>Hello I am a Title</h3>
	);
}

// 화살표 함수식으로 변환
const Button = () => (
	<button style={{
			backgroundColor: 'tomato',
		}}
		onClick={() => console.log('im clicked')}>
		Click me
	</button>
);

// 대문자로 불러오기 ★(html 언어와 혼동 주의)
const Container = () => (
	<div>
		<Title />
		<Button />	
	</div>
);
ReactDOM.render(<Container/>, root);
```

<br>

## React Hooks

- React 에서 기존에 사용하던 Class를 이용한 코드를 작성할 필요 없이, state와, 여러 React 기능을 사용할 수 있도록 만든 라이브러리

- 함수 컴포넌트가 어떤 값을 유지할 수 있도록, '캐시'를 만들고, 데이터 캐시를 이용하여 만든 여러개의 API

[React Hooks 참고사이트](https://defineall.tistory.com/900)

<br>

## React 기본 지원 Hooks

[참고사이트](https://defineall.tistory.com/900)

## useState

- React에서 사용자의 반응에 따라, 화면을 바꿔주기(렌더링) 위해 사용되는 트리거역할을 하는 변수

<br>

----

## #5.0 Introduction

## React 시작하기

①node.js 설치

https://nodejs.org

②node.js 버전 확인
>$ node -v

③npx 작동 확인
>$ npx

>$ npx create-react-app 새 폴더명

④Visual studio에서 터미널 열기

>$ cd 새 폴더명

>$ npm start

<br>

## import 단축키

window = crtl + space

macOs = command + i

----

## #5.1 Tour of CRA

## prop-types 플러그인 설치

prop-types 설치하고 하단 형식으로 타입 검사.

>$ npm i prop-types

<br>

isRequired를 사용하면 입력해야되는 값이 누락되었을때 콘솔 경고를 띄울 수 있음.

react-for-beginners/src/Button.js

```js
import PropTypes from 'prop-types';
.
.
.
function Button({text}){
    return (
        <button>{text}</button>
    )
}
Button.propTypes = {
    text : PropTypes.string.isRequired,
}
.
.
.
```

<br>

## React className

<br>

<img width="544" alt="스크린샷 2023-01-25 오후 2 40 40" src="https://user-images.githubusercontent.com/90018379/214488799-3ec124df-fff1-43f8-8462-b536752de535.png">

<img width="544" alt="스크린샷 2023-01-25 오후 3 03 58" src="https://user-images.githubusercontent.com/90018379/214492148-b517848f-d662-4657-87e0-306da0b72c2b.png">

<br>

React에서는 import한 class가 같은 class여도 자동으로 랜덤으로 지정됨.

<img width="544" alt="스크린샷 2023-01-25 오후 2 39 54" src="https://user-images.githubusercontent.com/90018379/214488788-695c79e3-9ebb-4932-bc75-1f88f7546116.png">

<img width="544" alt="스크린샷 2023-01-25 오후 2 40 17" src="https://user-images.githubusercontent.com/90018379/214488796-3903cb38-eddb-4649-9c83-453ea7550a59.png">

----

## useEffect

useState -> 변경되는 함수 감지할 때마다 render

useEffect -> 불러와질때 한번만 render

```js
useEffect(callback, [])
// API 또는 데이터를 딱 한번만 호출하고 그 뒤로는 호출하기 싫은 경우.
```

```js
useEffect(callback, [data])
// data를 한번 호출하고 그 뒤로는 data가 변화가 감지될 때만 호출.
```

예시 1) #6.1 useEffect 
```js
import { useState, useEffect } from 'react';
import Button from './Button';
import styles from './App.module.css'

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");//onClick 실행될때마다 샐행, render
  useEffect(() => {
    console.log("CALL THE API....");//페이지 불러와질때 한번만 실행
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"continue"}/>
    </div>
  );
}

export default App;
```

예시 2) #6.2 Deps
```js
import { useState, useEffect } from 'react';
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
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"continue"}/>
    </div>
  );
}

export default App;
```

<br>

2번씩 렌더 진행되는 오류

src/index.js 파일에 <React.StrictMode> -> 제거

```js
root.render(
	<React.StrictMode> -> 제거
  		<App />
	<React.StrictMode> -> 제거
);
```

[React.StrictMode](https://ko.reactjs.org/docs/strict-mode.html)

<br>

---


## #7.2 Coin Tracker 

## API 호출

React 애플리케이션에서 API를 사용하는 방법으로는 크게 Axios(Promise 기반 HTTP 클라이언트) 와 Fetch API(Javascript 내장 Web API)가 있다.

CoinTracker.js 파일에서는 Fetch API 방식으로 사용했다.

## Fetch

React에서는 fetch()함수를 이용해서 resource를 비동기 요청할 수 있다.

주로 API를 호출하고 응답 데이터를 받아오는데 사용.

fetch()기본 문법은 다음과 같다.
```js
let promise = fetch(url, [options])
```

`url` - 접근하고자 하는 URL

`options` - 선택 매개변수, mehtod나 header 등을 지정할 수 있다.

기본적인 Fetch 요청 예시

```js
fetch('url')
.then(response => response.json())
.then(response => data.filter(item => item.isRequired));
```
```js
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
```
fetch 함수는 API를 사용하여 백엔드 서버와 비동기 요청을 하는 방식 중 하나이다.

fetch() 함수는 디폴트로 GET 방식으로 작동하고 GET 방식은 요청 전문을 받지 않기 때문에 옵션 인자가 필요가 없습니다.

대부분의 REST API들은 JSON 형태의 데이터를 응답하기 때문에, 응답(response) 객체는 json() 메서드를 제공

fetch API는 3개의 interfeace를 도입하고 있는데 Headers, Request, Response이다.

1. fetch() 안에는 기본적으로 요청할 url을 넣는다.
2. get,post,put,delete중 default값으로는 get으로 동작한다.
3. 해당 주소에 요청을 하고 응답객체(object response)를 받는다.
4. 첫번째 .then()에서 응답을 받고 .json() 메소드로 파싱한 json()값을 리턴!
5. 두번째 .then()에서 리턴받은 json값을 받고, 원하는대로 처리가 가능하다!

<br>

## then

자바스크립트에서 함수는 동기함수, 비동기 함수로 나뉜다. 우리가 작성한 코드들은 위에서 아래로 순차적으로 코드가 실행되고 하나의 코드가 종료되지 않는다면 다음 코드로 넘어가지 않는다. 이것이 동기함수이다.
API를 호출할 때, 사용하는 fetch 함수는 대표적인 비동기함수이다. 그렇기 때문에 API호출하는 과정이 끝나지 않더라도 자동적으로 다음 코드로 넘어간다. 하지만 API로부터 받아온 정보를 사용할 필요가 있는 경우에 .then함수를 쓰는 것이다.

fetch는 비동기적으로 처리되는 함수이고, 처리가 완료되기까지 시간이 오래걸리기 때문에 fetch가 끝나기도 전에 다른 함수가 먼저 실행될 수 있다. (=순서가 섞일 수 있다) 그렇기 때문에 then을 써서 순서를 고정시키는 것이다.

다시 말해, then은 "fetch 다 끝나고나서 이 일을 해줘"의 뜻을 갖는 셈이다.

<br>

## method가 get인 경우

fetch() 함수에서 default method는 get

API명세
```js
설명: 유저 정보를 가져온다.
base url: https://api.google.com
endpoint: /user/3
method: get
응답형태:
  {
      "success": boolean,
      "user": {
          "name": string,
          "batch": number
      }
  }
```

```js
fetch('https://api.google.com/user/3')
.then(res => res.json())
.then(res => {
  if (res.success) {
      console.log(`${res.user.name}` 님 환영합니다);
  }
});
```

첫 번째 then 함수에 전달된 인자 res는 http 통신 요청과 응답에서 응답의 정보를 담고 있는 객체(Response Object)입니다.  

응답으로 받는 JSON 데이터를 사용하기 위해서는 Response Object 의 json 함수를 호출하고, return 해야합니다. 그러면 두 번째 then 함수에서 응답 body의 데이터를 받을 수 있습니다.

<br>

## method가 get인데 parameter를 전달해야 하는 경우

위의 get 예제에서 3이라는 user id를 path로 넘겨주었습니다. 그런데 path 말고 query string으로 넘겨줘야 할 수도 있습니다. 전달하는 방식 개발자에게 물어보고 진행.

```js
                                  //이부분 !
fetch('https://api.google.com/user?id=3')
  .then(res => res.json())
  .then(res => {
    if (res.success) {
        console.log(`${res.user.name}` 님 환영합니다);
    }
  });
```

## method가 post인 경우

post인 경우에는 fetch() 함수에 method 정보를 인자로 넘겨주어야 한다.

```js
fetch('https://api.google.com/user', {
  method: 'post',
  body: JSON.stringify({
      name: "yeri",
      batch: 1
  })
})
.then(res => res.json())
.then(res => {
  if (res.success) {
      alert("저장 완료");
  }
})
```

1. 두 번째 인자에 method와 body를 보내주어야 합니다.
2. method는 post
3. body는 JSON형태로 보내기 위해 JSON.stringfy() 함수에 객체를 인자로 전달하여 JSON형태로 변환.

post로 데이터를 보낼 때 JSON.stringfy를 항상 하다보니 axios는 굳이 감싸주지 않고 객체만 작성해도 되는 편리한 점이 있습니다. 이렇듯 axios는 소소하게 편한한 설정을 제공해주고, 요청과 응답에 대한 확장성 있는 기능을 만들 수 있습니다.

호출해야할 api가 get인지, post인지 api 정보를 아는 것은 오로지 api를 만든 개발자에게 문의해야함.

[mozilla - Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[mozilla - Fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)

[mozilla - then](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

[Fetch 함수 blog - 1](https://velog.io/@daybreak/React-Fetch%ED%95%A8%EC%88%98)

[Fetch 함수 blog - 2](daleseo.com/js-window-fetch/)

[React-fetch함수-사용법](https://velog.io/@jjburi/React-fetch%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%EB%B2%95)

[fetch() 함수 사용법](https://yeri-kim.github.io/posts/fetch/)

<br>

---

## #7.3 Movie App part One

## API - async, await 사용

[JSON Viewer 크롬 확장팩](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related?hl=ko)

상단 크롬 확장팩을 설치하면 API 데이터를 한줄로 나열되어 있는 형식이 아닌 어느정도 정리되어져서 보여짐. 

<br>

then대신에 async-await를 보편적으로 사용.

async, await 사용해서 API 데이터 가져오기

하단 3가지 코드는 모두 같은 데이터를 가져옴.
```js
1. fetch, then 사용 예시
useEffect(() => {
    fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
    .then((response) => response.json())
    .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
    });
}, []);

// 2. async, await 사용
const getMovies = async () => {
  const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  );
  const json = await response.json();
  setMovies(json.data.movies);
  setLoading(false);
};
useEffect(() => {
  getMovies();
}, []);

// 3. await 연속 사용하여 더 축약하기
const getMovies = async () => {
  const json = await (
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
  ).json();
  setMovies(json.data.movies);
  setLoading(false);
};
useEffect(() => {
  getMovies();
}, []);
```

<br>

---

## #7.4 Movie App part Two ~ #7.5 React Router

react-practice_3

## React Router

라우팅이란?

간단하게 생각 하자면 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것.

<br>

리액트 라우터(React Router)

React-Router는 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리. 

사용자가 입력한 주소를 감지하는 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종유의 라우터 컴포넌트를 제공

예시 - http://localhost:3000/movie/123

해당 url처럼 경로로 진입했을때 페이지 전환되는 방식 사용하기 위해 react-router-dom 설치해서 사용.

react-router-dom은 여러가지 컴포넌트들의 모음집.

<br>

react-router-dom 설치

>$ cd 파일 경로 진입

>$ npm install react-router-dom

<br>

1. Router에는 BrowserRouter와 Hash Router 두가지 종류가 있다. BrowserRouter가 일반적인 방식이며, Hash Router는 잘 쓰이지 않는다.(뒤에 #이런게 붙음)
    - rowserRouter : HTML5를 지원하는 브라우저의 주소를 감지 한다.
    - HashRouter 해시 주소(http://goddaehee.tistory.com/#test )를 감지 한다.

<br>

2. 버전 6이상에서는 Switch는 쓰이지 않는다. 이제 그역할은 Routes가 대신한다. 또한 Route 태그의 exact 속성도 더이상 쓰이지 않으며, Routes가 알아서 최적의 경로배정을 해주기 때문에 Switch를 썼을 때의 고민을 말끔히 해결해 준다.

3. 한 라우트에서 다른 라우트로 가고 싶을 땐 a태그의 href을 속성이 가장 먼저 생각이 날 것이고, 실제로도 그렇게 코드를 작성하면 이동이 가능하다. 하지만 페이지 전체가 새로고침되기 때문에 리액트의 장점을 깎아먹는다. 따라서 재실행되는 것을 막기 위해 react-router-dom에서 import한 link 태그를 사용하면 된다.

index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

App.js
```js
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Detail />} />
        </Routes>
    )
}

export default App;
```

## Link

```js
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
                //parent component로 부터 받아오는 properties
function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
        {/* img 태그에 alt값 안넣으면 에러 */}
        <img src={coverImg} alt={title} />
        <h2>
          <Link to="/movie">{title}</Link>
          {/* 클릭하면 http://localhost:3000/movie 페이지로 이동 */}
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```

[router 사용하기 참고사이트](https://goddaehee.tistory.com/305)

<br>

## 공식사이트에서의 createBrowserRouter 사용

추가로 더 공부해보기 !@

https://reactrouter.com/en/main/start/overview
```js
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

[router 공식 사이트](https://reactrouter.com/en/main/router-components/browser-router)

<br>

---

## #7.6 Parameters

동적 URL 만들기 (변수로 url 가져오기)

ex) http://localhose:3000/movie/:id값(ex:13132)

## useParams

url에 있는 값을 반환해주는 함수

useParams는 리액트에서 제공하는 Hook으로 동적으로 라우팅을 생성하기 위해 사용.

Route path 와 일치하는 현재 URL에서 동적 매개변수의 키/값 쌍의 개체를 반환.

쇼핑몰 웹사이트를 예를들면 메인 페이지에서 여러개의 값을 렌더링하고, 클릭한것만 렌더링 시키고자 할때 하나하나 다 onclick 이벤트를 사용하기가 번거로운데, useParams 로 해결 가능하다.


1. App.js - `<Detail />`에서 id값을 변수로 받겠다고 선언.
```js
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />{/*http://localhost:3000/*/}
            <Route path="/movie/:id" element={<Detail />} />{/*http://localhost:3000/movie*/}
        </Routes>
    )
}

export default App;
```
2. Movie.js - API로 부터 가져올 id값 propertie 추가해주기
```js
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
                //parent component로 부터 받아오는 properties
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
        {/* img 태그에 alt값 안넣으면 에러 */}
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```
3. Detail.js - `const { id } = useParams`로 변수 id 값 넘겨주기
```js
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>;
  }
  export default Detail;
```

<br>

---

## #7.7 Publishing

github.io 페이지에 배포하기

1. 업로드할 폴더 진입
>$ cd 폴더명

2. gh-pages : github pages에 업로드 해주는 패키지 설치
>$ npm i gh-pages

package.json 파일에 있는 script 확인 
- build 부분을 실행하면 production ready code(압축되고 최적화 된 코드)가 생성됨.
```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build", //<-- 해당부분
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
    하단 명령어를 실행하면 프로젝트 압축된 build 폴더가 생성됨. (3번에서 자동실행되도록 script 작성예정이라 명령어 실행 X.)
>$ npm run build

<br>

3. github repository 연결되었는지 확인하고 package.json 파일에 하단 코드 추가
```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",//추가 - gh-pages를 실행시키고 build 디렉토리를 가져감
    "predeploy": "npm run build"//추가 - build 다음에 deploy를 해야하는 것을 자동으로 실행하게 해줌.(predeploy가 자동으로 먼저 실행되고 npm run build 실행)
  },
```
```js
},//최하단 부분에 추가
  "homepage": "https://1gyou1.github.io/react-for-beginners"
}
```

<br>

github 연결되었는지 확인 명령어 - 아무것도 나오지 않는다면 연결해야함.
>$ git remote -v

github 사용자이름 연결됐는지 확인
>$ git config --global user.name

github repository 연결 : https://github.com/사용자이름/레파지토리
>$ git remote add origin https://github.com/1gyou1/react-for-beginners

>$ git push -u origin master

<br>

4. deploy 실행시키면 predeploy를 먼저 실행시킴

    predeploy는 npm run build를 실행시키고

    npm run build는 react-scripts build를 실행

    압축, 최적화된 코드가 들어있는 build폴더 생성되고, gh-pages -d build(gh-pages가 build 폴더를 github홈페이지에 업로드)가 실행됨.
>$ npm run deploy

5. package.json 폴더에 추가한 주소로 진입하여 확인하기.

<br>

** react가 업데이트 되면서 404가 뜨는 에러 발생.

App.js의 하단부분을 수정하여 오류 해결.

업데이트 5분 정도 걸리니 기다려보기 !

```js
<Routes basename={`${process.env.PUBLIC_URL}/`}>
```

<br>

---

