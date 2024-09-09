import "../../style/layout.css";
const AuthLayout = (props) => {
  const { classNameSection, classNameMain, children } = props;

  return (
    <>
      <section className={classNameSection}>
        <main className={classNameMain}>{children}</main>
      </section>
    </>
  );
};

export default AuthLayout;
