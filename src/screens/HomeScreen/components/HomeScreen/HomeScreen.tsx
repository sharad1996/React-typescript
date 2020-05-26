import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Input, Button } from "../../../../sharedComponents";
import { setUserDetails } from "../../actions";
import { history } from "../../../../core/history";
import { IRootState } from "../../../../core/root-reducer";

const mapStateToProps = (state: IRootState) => ({
    details: state.users,
});

const mapDispatchToProps = {
    setUserDetails,
};

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const HomeScreen: React.FC<Props> = (props: Props) => {
    const [name, setName] = useState<string>("");

    const handleSubmit = () => {
        if (name !== "") {
            props.setUserDetails(name);
            history.push('/main');
        }
    }

    return (
        <div className="d-flex flex-column h-100 align-items-center justify-content-center">
            <p>Hi there! Welcome to your education showcase</p><br/><br/>
            <p>Type you name and click "Enter" below to begin</p>
            <Input
                name="username"
                width={'24%'}
                value={name}
                onChange={(e: any) => { setName(e.target.value) }}
            />
            <Button className="mt-3" onClick={handleSubmit}>Enter</Button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
