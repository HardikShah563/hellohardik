// importing from react
import { useEffect } from "react";
// importing custom hook
import useMousePosition from "../config/useMousePosition";

export default function Cursor() {
    const mousePosition = useMousePosition();
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        cursor.style.left = mousePosition.x + "px";
        cursor.style.top = mousePosition.y + "px";
    });

    return (
        <>
            {/* cursor follower */}
            <div className="cursor"></div>
        </>
    );
};
