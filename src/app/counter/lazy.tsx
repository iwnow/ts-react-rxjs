import React, { lazy, useState, Suspense } from "react";

const LazyComponent = lazy(() => import(/* webpackChunkName: "counter" */'./counter'));
const Container = ({ show }) =>
    show ?
        <Suspense fallback={<p>loading...</p>}>
            <LazyComponent />
        </Suspense>
    : null

export default () => {
    const [isOpen, setOpen] = useState(false);

    return <>
        <button onClick={() => setOpen(true)}>show counter</button>
        <Container show={isOpen}/>
    </>
}