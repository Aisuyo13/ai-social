import Messenger from "./Messenger";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { RootStateType } from "../../redux/redux-store";

const mapStateToProps = (state: RootStateType) => {
    return {
        state: state.messenger
    }
}

const MessengerWithAuthRedirect = withAuthRedirect(Messenger);
const MessengerContainer = connect(mapStateToProps)(MessengerWithAuthRedirect);
export default MessengerContainer