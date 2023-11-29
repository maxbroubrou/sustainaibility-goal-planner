import React, {useState, useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Progress from "./Progress";
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

    const isFormValid = () => {
        if(progress.entry_date === undefined || progress.achieved_reduction === undefined || progress.notes === undefined) {
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        e.preventDefault();
        setProgress(Object.assign({}, progress, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            console.log('Please fill in all fields.');
            return;
        }

        const csrfToken = document.querySelector('[name=csrf-token]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

        const id = goal.data.id
        axios.post('/api/v1/progresses', { goal_id: id, ...progress })
        .then(response => {
            const included = [...goal.included, response.data.data]
            setGoal({...goal, included})
            setProgress({entry_date: '', achieved_reduction: '', notes: ''})
        })
        .catch(error => console.log(error))
    }

    let progresses
    if (loaded && goal.included){
        progresses = goal.included.map((item, index) => {
            return (
                <Progress key={index} attributes={item.attributes}/>            
            )
        })
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
                        {progresses}
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