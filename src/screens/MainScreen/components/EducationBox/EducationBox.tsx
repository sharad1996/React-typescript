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
                    <div key={`education-${index}`} className='educationBody'>
                        <h4>Graduate {education.field} @ {education.university} University</h4>
                        <h6>{education.startYear}-{education.endYear}</h6>
                        <span>Got degree of {education.degree} with {education.grade} grade</span>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default EducationBox;
