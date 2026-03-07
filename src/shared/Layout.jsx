function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <div className="content-container">{children}</div>
      <footer className="footer">
        <p>\u00A9 2026 Dessert Lab Mixed with React & Vite</p>
      </footer>
    </div>
  );
}

export default Layout;
