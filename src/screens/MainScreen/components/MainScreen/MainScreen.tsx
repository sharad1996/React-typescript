import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { IRootState } from "../../../../core/root-reducer";
import { Button, StyleModal } from "../../../../sharedComponents";
import { EducationBox } from "../EducationBox";
import { SideNavBar } from "../SideNavBar";
import { ModalContent } from "../ModalContent";
import { setEducationDetails } from "../../actions";
import "../../styles.css";

const mapStateToProps = (state: IRootState) => ({
    educations: state.educations.data,
    details: state.users
});

const mapDispatchToProps = {
    setEducationDetails,
};

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const MainScreen: React.FC<Props> = (props: Props) => {
    const [isModalOpen, setToggle] = useState<boolean>(false);
    const handleToggle = () => {
        setToggle(!isModalOpen)
    }
    return (
        <div className='col-lg-12'>
            <div className='col-lg-12'>
                <h2>Welcome to {props.details.name}'s education page.</h2>
                <Button onClick={handleToggle}>Add new education</Button>
                <StyleModal
                    isOpen={isModalOpen}
                    onBackgroundClick={handleToggle}
                    onEscapeKeydown={handleToggle}
                >
                    <ModalContent
                        setEducationDetails={props.setEducationDetails}
                    />
                </StyleModal>
            </div>
            <div className='col-lg-3'>
                <SideNavBar
                    educations={props.educations}
                />
            </div>
            <div className='col-lg-9'>
                <EducationBox
                    educations={props.educations}
                />
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
