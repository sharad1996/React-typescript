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
        props.setUserDetails(name);
        history.push('/main');
    }

    return (
        <div>
            <p>Hi there! Welcome to your education showcase</p>
            <div>
                <p>Type you name and click "Enter" below to begin</p>
                <Input
                    value={name}
                    onChange={(e: any) => { setName(e.target.name) }}
                />
                <Button onClick={handleSubmit}>Enter</Button>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
