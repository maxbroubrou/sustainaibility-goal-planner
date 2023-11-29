import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px;
    margin: 0 20px 20px 0;
`;

const EntryDate = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333; /* Adjust the color as needed */
`;

const AchievedReduction = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #4caf50; /* Green color for positive achievements */
`;

const Notes = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333; /* Adjust the color as needed */
    white-space: pre-line; /* Preserve newlines in the text */
`;

const Progress = (properties) => {
    const { entry_date, achieved_reduction, notes } = properties.attributes
    return (
        <Card>
            <EntryDate>{entry_date.substring(0, 10)}</EntryDate>
            <Notes>⮕ {notes}</Notes>
            <AchievedReduction>Progress of {achieved_reduction} units</AchievedReduction>
        </Card>
    )
};

export default Progress;