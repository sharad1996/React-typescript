import * as React from "react";
import { IEducation } from "../../types";

interface IProps {
    educations: IEducation[]
}

type Props = IProps;

const SideNavBar: React.FC<Props> = (props: Props) => {
    return (
        <div className='sideNavBody p-2'>
            <h6>Showcase University</h6>
            {props.educations && props.educations.length > 0 && props.educations.map((education: IEducation, index: number) => (
                <p key={`side-${index}`}>{education.university} University</p>
            ))}
        </div>
    );
};

export default SideNavBar;
