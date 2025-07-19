import Messenger from "./Messenger";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { GlobalStateType } from "../../redux/redux-store";

const mapStateToProps = (state: GlobalStateType) => {
    return {
        state: state.messenger
    }
}

const MessengerWithAuthRedirect = withAuthRedirect(Messenger);
const MessengerContainer = connect(mapStateToProps)(MessengerWithAuthRedirect);
export default MessengerContainer