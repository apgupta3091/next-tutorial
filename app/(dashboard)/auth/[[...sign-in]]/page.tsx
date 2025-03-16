const SignInPage = ({ params }: { params: { "sign-in": string[] } }) => {
  return <div>SignInPage: {params["sign-in"][1]}</div>;
};
export default SignInPage;
