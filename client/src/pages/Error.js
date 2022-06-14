import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="error" />
        <h3>Page Not Found</h3>
        <p>You're looking for a page that doesn't exists </p>
        <Link to="/">Back To Home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
