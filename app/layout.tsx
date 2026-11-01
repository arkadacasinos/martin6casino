import '@fontsource-variable/rubik'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark bg-[#0f121d]">
      <head>
        <meta name="yandex-verification" content="f822680c490d1989" />
        <title>Martin Casino официальный сайт — вход и рабочее зеркало Мартин Казино онлайн</title>
        <meta name="description" content="Играть в Martin Casino на официальном сайте: рабочее актуальное зеркало Мартин Казино, мгновенный вход в личный кабинет, бонусы до 225% и 600 фриспинов, быстрые выплаты и лицензионные слоты онлайн." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://martin6casino.vercel.app" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#121520" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Martin Casino" />
        <meta property="og:title" content="Martin Casino официальный сайт — вход и рабочее зеркало Мартин Казино онлайн" />
        <meta property="og:description" content="Играть в Martin Casino на официальном сайте: рабочее актуальное зеркало Мартин Казино, мгновенный вход в личный кабинет, бонусы до 225% и 600 фриспинов, быстрые выплаты и лицензионные слоты онлайн." />
        <meta property="og:url" content="https://martin6casino.vercel.app" />
        <meta property="og:image" content="https://martin6casino.vercel.app/images/martin-parrot.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Martin Casino официальный сайт — вход и рабочее зеркало Мартин Казино онлайн" />
        <meta name="twitter:description" content="Играть в Martin Casino на официальном сайте: рабочее актуальное зеркало Мартин Казино, мгновенный вход в личный кабинет, бонусы до 225% и 600 фриспинов, быстрые выплаты и лицензионные слоты онлайн." />
        <meta name="twitter:image" content="https://martin6casino.vercel.app/images/martin-parrot.webp" />
      </head>
      <body className="antialiased bg-[#0f121d] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  )
}
