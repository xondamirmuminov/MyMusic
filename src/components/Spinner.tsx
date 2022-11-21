import RingLoader from "react-spinners/RingLoader";
import StyledSpinner from "../styles/spinner";
import { COLORS } from "../constants";

export default function Spinner({ loading }: { loading: boolean }) {
  if (!loading) {
    return null;
  } else {
    return (
      <StyledSpinner>
        <RingLoader color={COLORS.main} size={180} />
      </StyledSpinner>
    );
  }
}