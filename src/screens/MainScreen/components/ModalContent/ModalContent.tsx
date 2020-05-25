import * as React from "react";
import { useState } from "react";
import { Wrapper, Label, Input, Button } from "../../../../sharedComponents";
import { IEducation } from "../../types";
import { setEducationDetails } from "../../actions";

interface IProps {
    setEducationDetails: (details: IEducation) => void;
}

interface IState {
    formState: IEducation;
}

type Props = IProps;

const ModalContent: React.FC<Props> = (props: Props, state: IState) => {
    const initialState = {
        university: "",
        startYear: "",
        endYear: "",
        degree: "",
        grade: "",
        field: "",
    };
    const [formState, setFormState] = useState(initialState);

    const handleChange = (event: any) => {
        const updatedState = { ...formState, [event.target.name]: event.target.value };
        setFormState(updatedState);
    }

    const handleSubmit = () => {
        setEducationDetails(formState);
    }

    return (
        <div>
            <h2 className='education'>Add Your Education</h2>
            <div className='col-lg-12'>
                <Wrapper>
                    <Label>University</Label>
                    <Input
                        type="text"
                        name="university"
                        value={formState.university}
                        onChange={handleChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>University</Label>
                    <Input
                        type="text"
                        name="university"
                        value={formState.university}
                        onChange={handleChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>University</Label>
                    <Input
                        type="text"
                        name="university"
                        value={formState.university}
                        onChange={handleChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>University</Label>
                    <Input
                        type="text"
                        name="university"
                        value={formState.university}
                        onChange={handleChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>University</Label>
                    <Input
                        type="text"
                        name="university"
                        value={formState.university}
                        onChange={handleChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>University</Label>
                    <Input
                        type="text"
                        name="university"
                        value={formState.university}
                        onChange={handleChange}
                    />
                </Wrapper>
            </div>
            <div className='footer'>
                <Button onClick={handleSubmit}>Save</Button>
            </div>
        </div> 
    );
};

export default ModalContent;
