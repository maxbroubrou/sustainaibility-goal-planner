import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
`
const GoalName = styled.div`
    padding: 20px 0 10px 0;
    font-weight: bold;
    font-size: 20px;
`
const GoalId = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0 0 0;
`
const Progression = styled.div`
    padding: 10px 0 10px 0;
    color: ${(properties) => {
        console.log(properties)
        if ((properties.progress / properties.target) * 100 < 20) return "#ff5e5e"; // red
        if ((properties.progress / properties.target) * 100 < 50) return "#ffaa5e"; // orange
        return "#4caf50"; // green
    }}
`
const Date = styled.div`
    font-size: 12px;
`

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
            <GoalId>Goal n°{properties.attributes.id}</GoalId>
            <GoalName>{properties.attributes.goal_name}</GoalName>
            <Progression progress={properties.attributes.current_progresses} target={properties.attributes.target_reduction}>Progress : {properties.attributes.current_progresses} out of {properties.attributes.target_reduction} {properties.attributes.target_unit}</Progression>
            <Date>Start date : {properties.attributes.start_date}</Date>
            <Date>End date : {properties.attributes.end_date}</Date>
            <GoalLink>
                <Link to={`/goals/${properties.attributes.id}`}>View Goal</Link>
            </GoalLink>
        </Card>
    )
}

export default Goal;