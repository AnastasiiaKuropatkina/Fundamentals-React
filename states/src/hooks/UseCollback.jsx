import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
/*
useCallback и useMemo - требуют ресурсов, поэтому их нужно использовать только тогда, когда это действительно необходимо
-useCallback - кеширует функцию, чтобы она не создавалась каждый раз заново
возращает мемоизированную версию колбека, которая изменяется только, если изменяются значения одной из зависимостей
-useMemo - кеширует результат выполнения функции, чтобы она не вычислялась каждый раз заново
возращает мемоизированное значение, которое изменяется только, если изменяются значения одной из зависимостей
- useMemo - для вичесление сложных выражений факториалов, которые необходимо вычислить каждый раз, когда компонент рендерится
*/

const CountButton = React.memo(({ onClick, count }) => {
    console.log("render", count);
    return <button onClick={onClick}>{count}</button>;
});

function DualCounter() {
    const [count1, setCount1] = useState(0);
    const increment1 = useCallback(() => setCount1((c) => c + 1), []);

    const [count2, setCount2] = useState(0);
    const increment2 = useCallback(() => setCount2((c) => c + 1), []);

    return (
        <>
            <CountButton count={count1} onClick={increment1} />
            <CountButton count={count2} onClick={increment2} />
        </>
    );
}

ReactDOM.render(<DualCounter />, document.querySelector("#root"));
