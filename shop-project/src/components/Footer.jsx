function Footer() {
  return (
    <footer className="page-footer light-blue darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/AnastasiiaKuropatkina/Fundamentals-React/tree/master/shop-project" target='_blank' rel="noreferrer">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
