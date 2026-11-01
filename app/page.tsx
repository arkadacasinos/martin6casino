export default function HomePage() {
  const refLink = "https://comboyolo.site/aeaofj2k27";

  return (
    <div className="min-h-screen flex flex-col bg-[#0f121d] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Pure CSS Mobile Drawer Menu via :target */}
      <div id="m7c9-menu" className="fixed inset-0 z-50">
        <a
          href="#!"
          className="fixed inset-0 bg-black/75 backdrop-blur-none cursor-default"
          aria-label="Закрыть меню"
        />
        <aside className="fixed top-0 left-0 bottom-0 w-[290px] max-w-[85vw] bg-[#121520] border-r border-white/10 p-5 z-10 flex flex-col justify-between overflow-y-auto shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <a href={refLink} className="flex items-center gap-2">
                <span className="font-black text-xl tracking-wider text-white">MARTIN</span>
                <span className="w-6 h-7 rounded bg-blue-600/30 border border-blue-400 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Закрыть меню"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 my-5">
              <a
                href={refLink}
                className="m7c9-btn-blue text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Вход
              </a>
              <a
                href={refLink}
                className="m7c9-btn-orange text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Регистрация
              </a>
            </div>

            <nav className="flex flex-col gap-1 text-sm font-medium text-slate-300">
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-amber-500/10 text-amber-400 font-semibold">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                Лобби
              </a>
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                <span className="font-bold text-amber-400 text-xs px-1 border border-amber-400/40 rounded">777</span>
                Слоты
              </a>
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Live-казино
              </a>
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                Спорт
              </a>
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
                Crash Games
              </a>
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9 7 4 9 4 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5L12 22h4l-1.96-3.5C17.1 19.43 18.48 20 20 20c3.31 0 6-2.69 6-6 0-5-5-7-8-12h-6z"/></svg>
                Настольные
              </a>
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
                Провайдеры
              </a>
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                Бонусы и турниры
              </a>
              <a href={refLink} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                Рабочее зеркало
              </a>
            </nav>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-slate-400 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Сервер онлайн 24/7</span>
            </div>
            <a href={refLink} className="text-blue-400 hover:underline">Поддержка клиентов</a>
          </div>
        </aside>
      </div>

      {/* Main Top Header Bar (Screen 2 faithful replica) */}
      <header className="sticky top-0 z-40 bg-[#121520] border-b border-white/10 px-3 sm:px-6 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Burger + Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href="#m7c9-menu"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-white/5"
              aria-label="Открыть навигационное меню"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            <a href={refLink} className="flex items-center gap-1.5 sm:gap-2 group">
              <span className="font-black text-lg sm:text-2xl tracking-wider text-white group-hover:text-blue-400 transition-colors">
                MARTIN
              </span>
              <div className="w-6 h-7 sm:w-7 sm:h-8 rounded-lg bg-blue-950/70 border border-blue-500/80 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.65)]">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Center: Search input pill */}
          <a
            href={refLink}
            className="flex-1 max-w-md hidden md:flex items-center gap-2 bg-[#1b2033] hover:bg-[#20273f] border border-white/10 rounded-full px-4 py-2 text-slate-400 text-sm transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Поиск игр, слотов и провайдеров</span>
          </a>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={refLink}
              className="m7c9-btn-blue text-white text-xs sm:text-sm font-semibold py-1.5 sm:py-2 px-3 sm:px-5 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Вход</span>
            </a>
            <a
              href={refLink}
              className="m7c9-btn-orange text-white text-xs sm:text-sm font-bold py-1.5 sm:py-2 px-3.5 sm:px-5 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-[0_0_18px_rgba(249,115,22,0.4)]"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Регистрация</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 flex flex-col gap-4 sm:gap-6">
        {/* FIRST SCREEN: Hero Banner Container (Screen 2 replica) */}
        <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#141b31] via-[#1a213e] to-[#2a1b41] border border-blue-500/20 p-5 sm:p-8 md:p-10 shadow-2xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Mascot Image (Vibrant Blue Parrot with gold coins) */}
            <div className="md:col-span-5 flex justify-center items-center order-1 md:order-1">
              <a href={refLink} className="relative block group">
                <div className="absolute inset-0 bg-blue-500/25 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/martin-parrot.webp"
                  alt="Martin Casino талисман попугай Мартин с золотыми монетами"
                  width={420}
                  height={380}
                  className="relative z-10 w-52 sm:w-72 md:w-full max-w-[360px] h-auto object-contain mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Banner Offer Content */}
            <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left gap-3 sm:gap-4 order-2 md:order-2">
              <span className="text-slate-300 font-medium text-sm sm:text-base tracking-wide uppercase">
                Welcome package
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                <span className="text-slate-300 font-semibold text-xl sm:text-3xl block md:inline mr-2">ДО</span>
                <span className="bg-gradient-to-r from-blue-300 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.5)]">
                  225%
                </span>
                <span className="inline-block ml-2 sm:ml-3 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-extrabold text-base sm:text-2xl px-2.5 sm:px-3.5 py-1 rounded-xl shadow-lg align-middle">
                  +600 FREE SPINS
                </span>
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm max-w-lg">
                Стартовый бонус для новых игроков на официальном сайте Martin Casino. Мгновенная активация и быстрый вывод на карту и СБП!
              </p>

              <div className="pt-2">
                <a
                  href={refLink}
                  className="m7c9-btn-blue text-white font-bold text-sm sm:text-lg px-8 sm:px-12 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(59,130,246,0.55)] cursor-pointer"
                >
                  <span>Получить</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Payment Methods Chips (replica of bottom banner row) */}
              <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="font-bold text-slate-200">СБП</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="font-bold text-slate-200">SberPay / T-Pay</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="font-semibold text-slate-200">МИР / VISA</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-lg px-2.5 py-1">
                  <span className="font-semibold text-amber-400">CRYPTO CURRENCY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Winners Ticker Bar (replica from Screen 2) */}
        <section className="bg-[#181d2e] border border-white/10 rounded-2xl p-2.5 sm:p-3 overflow-hidden shadow-lg">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="shrink-0 flex items-center gap-2 pr-3 border-r border-white/10 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Выигрыши Live</span>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap m7c9-ticker-scroll">
                {[
                  { game: "Star Bounty", user: "aZ***z11", win: "1 092 000 ₽", bg: "from-amber-600 to-yellow-500" },
                  { game: "Aztec Magic", user: "D**ic", win: "135 360 ₽", bg: "from-orange-600 to-amber-500" },
                  { game: "Wild West", user: "S**e", win: "161 610 ₽", bg: "from-red-600 to-rose-500" },
                  { game: "Brother Crossbow", user: "F*o", win: "150 188 ₽", bg: "from-purple-600 to-indigo-500" },
                  { game: "Joker Coins", user: "Poo***s45", win: "729 957 ₽", bg: "from-blue-600 to-cyan-500" },
                  { game: "Royal Bellion", user: "M**o", win: "104 322 ₽", bg: "from-yellow-600 to-amber-400" },
                  { game: "Gates of Olympus", user: "Bc***71", win: "340 500 ₽", bg: "from-emerald-600 to-teal-500" },
                  { game: "Sweet Bonanza", user: "V**ip", win: "215 000 ₽", bg: "from-pink-600 to-rose-500" },
                  { game: "Star Bounty", user: "aZ***z11", win: "1 092 000 ₽", bg: "from-amber-600 to-yellow-500" },
                  { game: "Aztec Magic", user: "D**ic", win: "135 360 ₽", bg: "from-orange-600 to-amber-500" },
                  { game: "Wild West", user: "S**e", win: "161 610 ₽", bg: "from-red-600 to-rose-500" },
                  { game: "Brother Crossbow", user: "F*o", win: "150 188 ₽", bg: "from-purple-600 to-indigo-500" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={refLink}
                    className="inline-flex items-center gap-2.5 bg-black/40 hover:bg-black/60 border border-white/5 rounded-xl px-3 py-1.5 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.bg} flex items-center justify-center text-xs font-black text-white shrink-0`}>
                      ★
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] text-slate-400">{item.user}</span>
                      <span className="text-xs font-bold text-amber-400">{item.win}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Quick Cards (Horizontal scroll on mobile / 4 columns on desktop) */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {/* Card 1: Колесо Фортуны */}
          <a
            href={refLink}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2338] to-[#181d2e] border border-white/10 p-3 sm:p-4 flex items-center justify-between hover:border-amber-500/50 transition-all shadow-md"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/wheel-fortune.webp"
                alt="Колесо фортуны"
                width={56}
                height={56}
                loading="lazy"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain drop-shadow shrink-0 group-hover:rotate-12 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  Колесо Фортуны
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400">Крути и выигрывай</span>
              </div>
            </div>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Card 2: Скачай приложение */}
          <a
            href={refLink}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2338] to-[#181d2e] border border-white/10 p-3 sm:p-4 flex items-center justify-between hover:border-blue-500/50 transition-all shadow-md"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v3h-3v-3zm0 5h3v3h-3v-3zm-5-5h3v3h-3v-3zm0 5h3v3h-3v-3zm2-2h3v3h-3v-3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  Скачай приложение
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400">iOS и Android</span>
              </div>
            </div>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Card 3: Реферальная программа */}
          <a
            href={refLink}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2338] to-[#181d2e] border border-white/10 p-3 sm:p-4 flex items-center justify-between hover:border-emerald-500/50 transition-all shadow-md"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/referral-guy.webp"
                alt="Реферальная программа"
                width={56}
                height={56}
                loading="lazy"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain drop-shadow shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Реферальная программа
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400">Зови друзей</span>
              </div>
            </div>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Card 4: Магазин бонусов */}
          <a
            href={refLink}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2338] to-[#181d2e] border border-white/10 p-3 sm:p-4 flex items-center justify-between hover:border-rose-500/50 transition-all shadow-md"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bonus-chest.webp"
                alt="Магазин бонусов"
                width={56}
                height={56}
                loading="lazy"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain drop-shadow shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                  Магазин бонусов
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400">Обмен баллов</span>
              </div>
            </div>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </section>

        {/* Sub-Navigation Categories Strip (replica from Screen 2) */}
        <section className="bg-[#121520] border border-white/10 rounded-2xl p-2 overflow-x-auto shadow-md">
          <div className="flex items-center gap-1 sm:gap-2 min-w-max">
            <a
              href={refLink}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-bold shadow-sm"
            >
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              <span>Лобби</span>
            </a>
            <a
              href={refLink}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-xs sm:text-sm font-medium transition-colors"
            >
              <span className="font-bold text-amber-400 text-xs px-1 border border-amber-400/40 rounded">777</span>
              <span>Слоты</span>
            </a>
            <a
              href={refLink}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-xs sm:text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Live-казино</span>
            </a>
            <a
              href={refLink}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-xs sm:text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              <span>Спорт</span>
            </a>
            <a
              href={refLink}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-xs sm:text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
              <span>Crash Games</span>
            </a>
            <a
              href={refLink}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-xs sm:text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9 7 4 9 4 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5L12 22h4l-1.96-3.5C17.1 19.43 18.48 20 20 20c3.31 0 6-2.69 6-6 0-5-5-7-8-12h-6z"/></svg>
              <span>Настольные</span>
            </a>
            <a
              href={refLink}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-xs sm:text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
              <span>Провайдеры</span>
            </a>
          </div>
        </section>

        {/* SEO ARTICLE SECTION (Exact ~350 words matching user specifications and keyword densities) */}
        <article className="mt-4 bg-[#141828] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl flex flex-col gap-6 text-slate-200 leading-relaxed">
          {/* Section 1 */}
          <section id="section-official" className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-500 rounded-full inline-block shrink-0" />
              Martin Casino официальный сайт и рабочее зеркало
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Casino официальный сайт</a> открывает круглосуточный доступ к лицензионным игровым автоматам, настольным играм и Live-дилерам с высокой отдачей. Если основной сетевой домен временно блокируется интернет-провайдерами, используйте <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Casino зеркало</a>, которое полностью повторяет функционал площадки. Посещая <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино официальный сайт</a>, игроки получают защищенное соединение, оперативную регистрацию за пару секунд и моментальный доступ к любимым слотам. Проверенный <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Casino официальный</a> ресурс гарантирует сохранность персональных данных по современным протоколам шифрования, а <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино официальный</a> портал функционирует без зависаний на любых смартфонах и ПК. Популярное <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Казино</a> ежедневно выбирают тысячи пользователей за надежные финансовые шлюзы. Современное <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Казино</a> предоставляет прозрачные правила вывода выигрышей и регулярные бонусы.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-mirror" className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-amber-500 rounded-full inline-block shrink-0" />
              Мартин Казино зеркало рабочее: безопасный вход онлайн
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Когда прямой вход в личный кабинет ограничен, выручает <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино зеркало рабочее</a>, обеспечивающее бесперебойное подключение к балансу, акциям и бонусам. Актуальное <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино зеркало</a> синхронизировано с единой базой данных, поэтому повторно создавать учетную запись не требуется. Надежное <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Casino зеркало</a> защищает от фишинга и перенаправляет в проверенный игровой профиль. Переходите в <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино онлайн</a> через безопасные альтернативные ссылки, чтобы активировать промокоды и участвовать в турнирных состязаниях. Официальное <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино зеркало рабочее</a> функционирует без потери скорости как в мобильной версии, так и на настольных компьютерах.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-play" className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-500 rounded-full inline-block shrink-0" />
              Martin Casino играть онлайн: лицензионные слоты в Мартин Казино
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Начать в <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Casino играть</a> на реальные деньги можно сразу после пополнения счета через СБП, банковские карты или криптовалютные кошельки. Для тех, кто предпочитает сначала протестировать механику автоматов, <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино онлайн</a> предлагает бесплатный демонстрационный режим без риска. Выбирая в <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино играть</a> на лицензионных аппаратах, вы получаете честный уровень отдачи RTP и оригинальный сертифицированный софт от ведущих мировых провайдеров. В клубе <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Casino играть</a> выгодно благодаря приветственному пакету бонусов до 225% и 600 фриспинам на старте. Любой новичок может в <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино играть</a> с минимальными ставками и мгновенным выводом призов.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-register" className="flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-500 rounded-full inline-block shrink-0" />
              Регистрация и выплаты в Мартин Казино онлайн
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Создать аккаунт в <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино официальный сайт</a> позволяет в один клик по номеру телефона или электронной почте. Надежный <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Casino официальный</a> сервис поддерживает мгновенные выплаты выигрышей без скрытых комиссий. Заходите на <a href={refLink} className="text-blue-400 hover:underline font-semibold">Martin Casino официальный сайт</a> или актуальное <a href={refLink} className="text-amber-400 hover:underline font-semibold">Мартин Казино зеркало</a>, чтобы получить стартовый пакет привилегий, круглосуточную поддержку саппорта и честные выплаты.
            </p>
          </section>

          {/* Quick Specifications Table */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
            <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex flex-col gap-1">
              <span className="text-slate-400">Лицензия</span>
              <span className="font-bold text-white">Curacao eGaming</span>
            </div>
            <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex flex-col gap-1">
              <span className="text-slate-400">Мин. депозит</span>
              <span className="font-bold text-emerald-400">от 100 ₽</span>
            </div>
            <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex flex-col gap-1">
              <span className="text-slate-400">Приветственный бонус</span>
              <span className="font-bold text-amber-400">до 225% + 600 FS</span>
            </div>
            <div className="bg-black/30 border border-white/5 rounded-xl p-3 flex flex-col gap-1">
              <span className="text-slate-400">Вывод выигрышей</span>
              <span className="font-bold text-blue-400">1 — 15 минут</span>
            </div>
          </div>

          {/* Big CTA Button */}
          <div className="pt-2 flex justify-center">
            <a
              href={refLink}
              className="m7c9-btn-orange text-white font-extrabold text-base sm:text-lg px-8 sm:px-14 py-3.5 sm:py-4 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.5)] flex items-center gap-3"
            >
              <span>Перейти на официальный сайт Martin Casino</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </article>
      </main>

      {/* Footer with Hashtags & Legal Notices */}
      <footer className="mt-10 bg-[#0c0e17] border-t border-white/10 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Footer Hashtags as section anchors */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
            <a href="#section-official" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #martincasino
            </a>
            <a href="#section-official" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #мартинказино
            </a>
            <a href="#section-official" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #martincasinoофициальныйсайт
            </a>
            <a href="#section-official" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #мартинказиноофициальныйсайт
            </a>
            <a href="#section-mirror" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #martincasinoзеркало
            </a>
            <a href="#section-mirror" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #мартинказинозеркало
            </a>
            <a href="#section-mirror" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #мартинказинозеркалорабочее
            </a>
            <a href="#section-play" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #martincasinoиграть
            </a>
            <a href="#section-play" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #мартинказиноиграть
            </a>
            <a href="#section-play" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #мартинказиноонлайн
            </a>
            <a href="#section-official" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              #martincasinoофициальный
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full border border-red-500 text-red-500 font-bold flex items-center justify-center text-[10px]">
                18+
              </span>
              <span>Азартные игры могут вызывать зависимость. Играйте ответственно.</span>
            </div>
            <p className="text-center sm:text-right">
              © 2026 Martin Casino. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Support Headset Button (bottom right) matching Screen 2 */}
      <a
        href={refLink}
        className="fixed bottom-5 right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform"
        aria-label="Онлайн-поддержка Martin Casino 24/7"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 11a9 9 0 0118 0v2a3 3 0 01-3 3h-1a2 2 0 01-2-2v-4a2 2 0 012-2h2M3 13a3 3 0 003 3h1a2 2 0 002-2v-4a2 2 0 00-2-2H5" />
        </svg>
      </a>
    </div>
  );
}
