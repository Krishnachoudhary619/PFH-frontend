import { useEffect, useState } from "react";

export function useOtpTimer(initialSeconds = 60) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isActive) return;

        if (seconds === 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsActive(false);
            return;
        }

        const timer = setTimeout(() => {
            setSeconds((s) => s - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [seconds, isActive]);

    const start = () => {
        setSeconds(initialSeconds);
        setIsActive(true);
    };

    return {
        seconds,
        isActive,
        start,
        canResend: seconds === 0,
    };
}
