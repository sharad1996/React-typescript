import * as React from "react";
import { IEducation } from "../../types";

interface IProps {
    educations: IEducation[]
}

type Props = IProps;

const SideNavBar: React.FC<Props> = (props: Props) => {
    return (
        <div className='sideNavBody'>
            {props.educations && props.educations.length > 0 && props.educations.map((education: IEducation, index: number)=>(
                <div key={`side-${index}`}>
                    <h4>{education.university} University</h4>
                </div>
            ))}
        </div>
    );
};

export default SideNavBar;
