import React, { useState, useEffect, useLayoutEffect } from "react";
// useEffect - срабатывает после отрисовки компонента, оотрисовка 2 раза
// useLayoutEffect - срабатывает перед отрисовкой компонента, отрисовка 1 раз

export default function App() {
    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value]);

    console.log("render", value);

    return <button onClick={() => setValue(0)}>value: {value}</button>;
}