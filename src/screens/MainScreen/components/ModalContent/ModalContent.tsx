import * as React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Label, Input, Button, Textarea } from "../../../../sharedComponents";
import { IEducation } from "../../types";
import { Select } from "../AsyncSelect";

interface IProps {
    universities: any;
    handleToggle: () => void;
    setEducationDetails: (details: IEducation) => void;
    getUniversities: (value: string) => void;
}

interface IState {
    formState: IEducation;
}

type Props = IProps;

const ModalContent: React.FC<Props> = (props: Props, state: IState) => {
    const initialState = {
        university: "",
        startYear: null,
        endYear: null,
        degree: "",
        grade: "",
        field: "",
        description: ""
    };
    const [formState, setFormState] = useState(initialState);

    const handleChange = (key: string, value: string | Date) => {
        const updatedState = { ...formState, [key]: value };
        setFormState(updatedState);
    }

    const handleSubmit = () => {
        props.setEducationDetails(formState);
        props.handleToggle();
    }

    return (
        <div className="w-100 px-4">
            <h6 className='text-left ml-3'>New Education Modal</h6>
            <div className='col-lg-12'>
                <div className="row">
                    <div className="col-12">
                        <Label>University</Label>
                        <Select
                            name="university"
                            onSelect={handleChange}
                            options={props.universities}
                            getOptions={props.getUniversities}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Label>Start Year</Label>
                        <DatePicker
                            name="startYear"
                            placeholderText="Start Year"
                            selected={formState.startYear}
                            onChange={(date: Date) => { handleChange('startYear', date) }}
                        />
                    </div>
                    <div className="col-6">
                        <Label>End Year</Label>
                        <DatePicker
                            name="endYear"
                            placeholderText="End Year"
                            selected={formState.endYear}
                            onChange={(date: Date) => { handleChange('endYear', date) }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Label>Degree</Label>
                        <Input
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            value={formState.degree}
                            onChange={(e) => { handleChange('degree', e.target.value) }}
                        />
                    </div>
                    <div className="col-6">
                        <Label>Grade</Label>
                        <Input
                            type="text"
                            name="grade"
                            placeholder="Grade"
                            value={formState.grade}
                            onChange={(e) => { handleChange('grade', e.target.value) }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Label>Field</Label>
                        <Input
                            type="text"
                            name="field"
                            placeholder="Field"
                            value={formState.field}
                            onChange={(e) => { handleChange('field', e.target.value) }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Label>Description</Label>
                        <Textarea
                            name="description"
                            placeholder="Description"
                            value={formState.description}
                            onChange={(e) => { handleChange('description', e.target.value) }}
                        />
                    </div>
                </div>
            </div>
            <div className='text-right mt-3'>
                <Button onClick={handleSubmit}>Save</Button>
            </div>
        </div> 
    );
};

export default ModalContent;
