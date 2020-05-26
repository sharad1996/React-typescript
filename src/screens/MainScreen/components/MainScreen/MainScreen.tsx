import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { IRootState } from "../../../../core/root-reducer";
import { Button, StyleModal } from "../../../../sharedComponents";
import { EducationBox } from "../EducationBox";
import { SideNavBar } from "../SideNavBar";
import { ModalContent } from "../ModalContent";
import { getUniversities, setEducationDetails } from "../../actions";
import "../../styles.css";

const mapStateToProps = (state: IRootState) => ({
    universities: state.educations.universities,
    educations: state.educations.data,
    details: state.users
});

const mapDispatchToProps = {
    setEducationDetails,
    getUniversities
};

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const MainScreen: React.FC<Props> = (props: Props) => {
    const [isModalOpen, setToggle] = useState<boolean>(false);
    
    const handleToggle = () => {
        setToggle(!isModalOpen)
    }

    return (
        <>
            <div className='row m-0'>
                <div className='col-lg-12 mt-5'>
                    <h6>Welcome to {props.details.name}'s education page.</h6>
                    <Button onClick={handleToggle}>Add new education</Button>
                    <StyleModal
                        isOpen={isModalOpen}
                        onBackgroundClick={handleToggle}
                        onEscapeKeydown={handleToggle}
                    >
                        <ModalContent
                            universities={props.universities}
                            handleToggle={handleToggle}
                            setEducationDetails={props.setEducationDetails}
                            getUniversities={props.getUniversities}
                        />
                    </StyleModal>
                </div>
            </div>
            <div className='row m-0'>
                <div className='col-lg-2'>
                    <SideNavBar
                        educations={props.educations}
                    />
                </div>
                <div className='col-lg-10'>
                    <EducationBox
                        educations={props.educations}
                    />
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
