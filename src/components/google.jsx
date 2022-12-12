import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";

const Google = (props) => {
  const clientId = process.env.REACT_APP_GOOGLE || "";

  const success = (payload) => {
    props.success(payload);
  };

  const fail = (payload) => {
    props.fail(payload);
  };

  if (!clientId) return <>.env의 REACT_APP_GOOGLE을 확인해주세요</>;

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={success}
      onFailure={fail}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <span onClick={renderProps.onClick} disabled={renderProps.disabled}>
          {" "}
          Google Login
        </span>
      )}
    />
  );
};

Google.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Google;
