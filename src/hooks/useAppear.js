export default function useAppear(ref, classAdd, time) {
    const timer = setTimeout(() => {
        for (let i = 0; i < ref.current.children.length; i++) {
            if (ref.current.children[i].tagName === "SPAN") {
                setTimeout(() => {
                    return ref.current.children[i].classList.add(classAdd)
                }, i * time);
            }
        }
    }, 1000);
    return () => clearTimeout(timer);
}