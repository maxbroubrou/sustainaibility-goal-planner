import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
`
const GoalName = styled.div`
    padding: 20px 0 10px 0;
`
const GoalId = styled.div``
const TargetReduction = styled.div``
const TargetUnit = styled.div``
const CurrentProgresses = styled.div``
const StartDate = styled.div``
const EndDate = styled.div``
const GoalLink = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const Goal = (properties) => {
    return (
        <Card>
            <GoalName>{properties.attributes.goal_name}</GoalName>
            <div className="goal-id">Goal n°{properties.attributes.id}</div>
            <div className="target-reduction">{properties.attributes.target_reduction}</div>
            <div className="target-unit">{properties.attributes.target_unit}</div>
            <div className="current-progresses">{properties.attributes.current_progresses}</div>
            <div className="start-date">{properties.attributes.start_date}</div>
            <div className="end-date">{properties.attributes.end_date}</div>
            <GoalLink>
                <Link to={`/goals/${properties.attributes.id}`}>View Goal</Link>
            </GoalLink>
        </Card>
    )
}

export default Goal;