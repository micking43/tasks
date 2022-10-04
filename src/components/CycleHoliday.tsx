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
    return (
        <div>
            <div>
                <Button onClick={alphabet}>Advance By Alphabet</Button>
            </div>
            <div>
                <Button onClick={year}>Advance by Date</Button>
            </div>
            <div>
                Holiday:{" "}
                {holiday === "Halloween" ? (
                    <span>🎃</span>
                ) : holiday === "Christmas" ? (
                    <span>🎁</span>
                ) : holiday === "Hanukkah" ? (
                    <span>🕎</span>
                ) : holiday === "Thanksgiving" ? (
                    <span>🦃</span>
                ) : holiday === "Valentines Day" ? (
                    <span>❤️</span>
                ) : (
                    <span> </span>
                )}
            </div>
        </div>
    );
}
