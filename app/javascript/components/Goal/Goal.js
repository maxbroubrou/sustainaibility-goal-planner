import React, {useState, useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import ProgressForm from "./ProgressForm";
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

    const handleChange = (e) => {
        e.preventDefault();
        setProgress(Object.assign({}, progress, {[e.target.name]: e.target.value}))

        console.log('progress:', progress);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const csrfToken = document.querySelector('[name=csrf-token]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

        const id = goal.data.id
        console.log('goal:', id);
        console.log('progress:', { goal_id: id, ...progress});
        axios.post('/api/v1/progresses', { goal_id: id, ...progress })
        .then(response => {
            const included = [...goal.included, response.data.data]
            setGoal({...goal, included})
            setProgress({entry_date: '', achieved_reduction: '', notes: ''})
        })
        .catch(error => console.log(error))
    }

    return (
        <Wrapper>
            {loaded &&
            <Fragment>
                <Column>
                    <Main>
                            <Header
                            attributes={goal.data.attributes}
                            progresses={goal.included}
                            />
                        <div className="progresses"></div>
                    </Main>
                </Column>
                <Column>
                    <ProgressForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    attributes={goal.data.attributes}
                    progress={progress}
                    />
                </Column>
            </Fragment>
            } 
        </Wrapper>
    )
}

export default Goal;