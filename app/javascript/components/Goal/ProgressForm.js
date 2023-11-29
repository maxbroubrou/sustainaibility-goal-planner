import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
padding: 20px;
h1 {
    font-size: 42px;
    color: #fff;
}
color: #fff
height: 100vh;
padding-top: 100px;
background: #000;
`;

const Field = styled.div`
    border-radius: 4px;

    input {
        min-height: 40px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding: 12px;
        width: 96%;
    }
        
        textarea {
            width: 100%;
            min-height: 80px;
            border-radius: 4px;
            border: 1px solid #e6e6e6;
            margin: 12px 0;
            padding: 12px;
    }`;

const SubmitBtn = styled.button`
    color: #fff;
    background: #333;
    border-radius: 4px;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    margin-top: 20px;
    width: 100%;

    &:hover {
        background: #fff;
        color: #333;
        border: 3px solid #71b406;
    }
`;
const Headline = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    `;

const ProgressForm = (props) => {
    return (
        <Wrapper>
            <h1>Progress Form</h1>
            <form onSubmit={props.handleSubmit}>
                <Headline>Enter a progress to {props.attributes.goal_name} :</Headline>
                <div>
                    <Field>
                    <input onChange={props.handleChange} value={props.progress.entry_date} type="date" name="entry_date"/>
                    </Field>
                    <Field>
                    <input onChange={props.handleChange} value={props.progress.achieved_reduction} type="number" name="achieved_reduction" />
                    </Field>
                    <Field>
                    <input onChange={props.handleChange} value={props.progress.notes} type="text" name="notes" />
                    </Field>
                    <SubmitBtn type="submit">Submit New Progress</SubmitBtn>
                </div>
            </form>
        </Wrapper>
    )
}

export default ProgressForm;