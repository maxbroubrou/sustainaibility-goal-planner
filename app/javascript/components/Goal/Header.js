import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 100px 50px 100px;
`

const HeaderTitle = styled.h1`
    border: 2px solid #4caf50; /* Green border */
    padding: 10px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
`

const GoalId = styled.div`
    font-size: 24px;
    font-weight: bold;
`
const ProgressBarWrapper = styled.div`
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 5px;
    margin: 10px 0;
`
const ProgressBar = styled.div`
    height: 20px;
    border-radius: 5px;
    width: ${(props) => (props.progress / props.target) * 100}%;
    background-color: ${(props) => {
        if ((props.progress / props.target) * 100 < 20) return "#ff5e5e"; // red
        if ((props.progress / props.target) * 100 < 50) return "#ffaa5e"; // orange
        return "#4caf50"; // green
    }};
`
const Date = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #333;
`


const Header = (properties) => {
    const { goal_name, id, target_reduction, target_unit, current_progresses, start_date, end_date } = properties.attributes

    return (
        <Wrapper>
            <HeaderTitle>Goal : {goal_name}</HeaderTitle>
            <div>
                <GoalId>Goal ID : {id}</GoalId>
                <ProgressBarWrapper>
                    <ProgressBar progress={current_progresses} target={target_reduction} />
                </ProgressBarWrapper>
                <div>
                    Current Progress : {current_progresses} out of {target_reduction} {target_unit}
                </div>

                <br/>
                <Date>Start Date : {start_date}</Date>
                <Date>End Date : {end_date}</Date>
            </div>
        </Wrapper>
    )
}

export default Header;