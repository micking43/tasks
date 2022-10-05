/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "Halloween"
    | "Christmas"
    | "Hanukkah"
    | "Thanksgiving"
    | "Valentines Day";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Halloween");
    function alphabet(): void {
        setHoliday(
            holiday === "Halloween"
                ? "Hanukkah"
                : holiday === "Hanukkah"
                ? "Thanksgiving"
                : holiday === "Thanksgiving"
                ? "Valentines Day"
                : holiday === "Valentines Day"
                ? "Christmas"
                : "Halloween"
        );
    }

    function year(): void {
        setHoliday(
            holiday === "Valentines Day"
                ? "Halloween"
                : holiday === "Halloween"
                ? "Thanksgiving"
                : holiday === "Thanksgiving"
                ? "Hanukkah"
                : holiday === "Hanukkah"
                ? "Christmas"
                : "Valentines Day"
        );
    }
    function emojis(): string {
        if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Christmas") {
            return "🎁";
        } else if (holiday === "Hanukkah") {
            return "🕎";
        } else if (holiday === "Thanksgiving") {
            return "🦃";
        } else if (holiday === "Valentines Day") {
            return "❤️";
        } else {
            return "🎃";
        }
    }
    return (
        <div>
            <div>
                Holiday: {emojis()} {holiday}
            </div>
            <div>
                <Button onClick={alphabet}>Advance By Alphabet</Button>
            </div>
            <div>
                <Button onClick={year}>Advance by Year</Button>
            </div>
        </div>
    );
}
