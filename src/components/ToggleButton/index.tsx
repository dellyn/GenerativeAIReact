import React, { useState } from "react";
import styles from "./ToggleButton.module.scss";

interface ToggleButtonProps {
    options: string[];
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ options }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.toggleButtonGroup}>
            {options.map((option, index) => (
                <div
                    key={index}
                    className={`${styles.toggleButton} ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    {option}
                </div>
            ))}
        </div>
    );
};

export default ToggleButton;
