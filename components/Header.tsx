const Header = () => {
  return (
    <section className="antialiased w-full" id="Header">
      <nav className="bg-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://cinecrowd.xyz" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.webp" className="h-8" alt="CineCrowd Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CineCrowd</span>
          </a>
        </div>
      </nav>
    </section>
  )
}

export default Header