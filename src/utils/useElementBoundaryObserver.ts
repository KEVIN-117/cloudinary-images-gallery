import {useState, useEffect, useRef} from "react";

export function useElementBoundaryObserver(thresholdValue: number){
    const ref = useRef(null)
    const [boundary, setBoundary] = useState('')
    useEffect(() => {
        const currentRef = ref.current
        const observerOptions = {
            root: null,
            threshold: thresholdValue
        }

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                entry.target.classList.toggle('show', entry.isIntersecting)
            })
        }, observerOptions)

        if (currentRef){
            console.log('currentRef', currentRef)
            observer.observe(currentRef)
        }

        return ()=>{
            if (currentRef){
                observer.unobserve(currentRef)
            }
        }
    }, [thresholdValue]);

    return [ref, boundary]
}
