export default function Footer() {
  return (
    <footer
      id="footer"
      className="footer text-white relative pt-[20vh] px-[32px] flex flex-col gap-[12px] md:gap-[56px] pb-[80px] bg-[#23161A] z-10"
    >
      <div className="flex flex-col gap-1 justify-between md:flex-row">
        <a>christ.jmanzano@gmail.com</a>
        <div className="flex justify-between">
          <p>(+ 34) 617 13 98 61</p>
        </div>
        <ul className="hidden md:flex items-center md:gap-[16px] lggap-[80px]">
          <li>
            <a href="https://www.linkedin.com/in/chokchrist/" className="relative overflow-hidden">
              <span className="inline-block overflow-visible">
                LinkedIn
              </span>
            </a>
          </li>

          <li>
            <a href="https://github.com/chokchrist" className="relative overflow-hidden">
              <span className="inline-block overflow-visible">
                Github
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
