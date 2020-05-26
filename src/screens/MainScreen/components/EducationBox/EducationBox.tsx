import * as React from "react";
import { Fragment } from "react";
import { IEducation } from "../../types";

interface IProps {
    educations: IEducation[]
}

type Props = IProps;

const EducationBox: React.FC<Props> = (props: Props) => {
    return (
        <Fragment>
            <div>
                {props.educations && props.educations.length > 0 && props.educations.map((education: IEducation, index)=>(
                    <div key={`education-${index}`} className='educationBody text-left p-2'>
                        <h6>Graduate {education.field} @ {education.university} University</h6>
                        <p>{education.startYear && education.startYear.toDateString()} - {education.endYear && education.endYear.toDateString()}</p>
                        <p>Got degree of {education.degree} with {education.grade} grade</p>
                        <p>{education.description}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default EducationBox;
