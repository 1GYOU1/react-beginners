import { useEffect, useState } from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
                                    /* 
                                    coins loading중일때 값이 없는 undefined 형태면 오류가 발생하기 때문에 비어있는 배열 형식으로 지정해둠. 
                                    */
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        /*
        개발자도구(F12) > Network > 새로고침 > 파일 목록(ticker) > response, Preview 데이터가 불러와지는 것 확인 가능
        */
        fetch("https://api.coinpaprika.com/v1/tickers")
        //response에서 받은 데이터를 json으로 불러오기.
        .then((response) => response.json())
        //json으로 불러오면 console.log로 확인 가능
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, []);
    return (
        <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? (
            <strong>Loading...</strong>
        ) : (
            <select>
            {coins.map((coin, index) => (
                <option key={index}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                </option>
            ))}
            </select>
        )}
    </div>
  );
}

export default CoinTracker;