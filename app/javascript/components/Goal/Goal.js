import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header"; 
import styled from "styled-components";

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`;

const Main = styled.div`
    left-padding: 50px;
`;

const Goal = (properties) => {
    const [goal, setGoal] = useState({});
    const [progress, setProgress] = useState({});
    const params = useParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const url = `/api/v1/goals/${params.id}`;

        axios.get(url)
            .then(response => {
                setGoal(response.data)
                setLoaded(true)
                // setProgress(response.data.included)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <Wrapper>
            <Column>
                <Main>
                    {loaded &&
                        <Header
                        attributes={goal.data.attributes}
                        progresses={goal.included}
                        />
                    } 
                    <div className="progresses"></div>
                </Main>
            </Column>
            <Column>
                <div className="progress-form">[Progress form goes here]</div>
            </Column>
        </Wrapper>
        // <div>This is our the Goals#show view for our app.</div>
    )
}

export default Goal;