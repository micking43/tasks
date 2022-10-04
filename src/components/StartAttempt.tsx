import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function addOne(): void {
        setAttempts(attempts + 1);
    }
    function minusOne(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }

    return (
        <div>
            <div>
                Number of Attempts: <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={minusOne}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={addOne} disabled={progress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
