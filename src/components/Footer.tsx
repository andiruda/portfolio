export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] py-8 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#64748b]">
            © {year} Andi Ruda
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/andiruda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#64748b] hover:text-[#1e40af] transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-[#64748b] hover:text-[#1e40af] transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
