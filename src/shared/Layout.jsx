function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <div className="content-container">{children}</div>
      <footer className="footer">
        <p>&copy; 2026 Dessert Lab Mixed with React & Vite</p>
      </footer>
    </div>
  );
}

export default Layout;
