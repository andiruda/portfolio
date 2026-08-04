export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>© {new Date().getFullYear()} Andi Ruda</p>
        <p>Engineering leadership · Detroit, Michigan</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
