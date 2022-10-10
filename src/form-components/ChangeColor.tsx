import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function newColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <>
                    <Form.Check
                        inline
                        type="radio"
                        id="colorButtons"
                        name="Whats Your Favorite Color?"
                        value={color}
                        label={color}
                        onChange={newColor}
                    />
                </>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                Your chosen color is {color}
            </div>
        </div>
    );
}
