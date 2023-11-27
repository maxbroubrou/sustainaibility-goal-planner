import React, { useState, useEffect} from "react";
import axios from "axios";
import Goal from "./Goal";
import styled from "styled-components";

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1 {
        font-size: 42px;
    }
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Goals = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/goals.json")
            .then(response => {
                setGoals(response.data.data)
            })
            .catch(
                error => console.log(error)
            )
    }, [goals.length])

    const grid = goals.map((goal) => {
        return (
            <Goal
                key={goal.attributes.goal_name}
                attributes={goal.attributes}
            />
            // <li key={goal.attributes.goal_name}>{goal.attributes.goal_name}</li>
        )
    })

    return (
        <Home>
            <Header>
                <div>This is our the Goals#index view for our app.</div>
                <h1>Goals</h1>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )   
}

export default Goals;