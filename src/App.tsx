import { useEffect } from "react";

export default function App() {
    const cursor = document.querySelector('.cursor');
    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            let leftPosition = e.pageX;
            let topPosition = e.pageY;
            cursor.style.left = leftPosition + "px";
            cursor.style.top = topPosition + "px";
        });
    })

    return (
        <>
            {/* cursor follower */}
            <div className="cursor"></div>

            {/* stars background */}
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </>
    );
};