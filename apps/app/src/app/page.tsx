import Link from 'next/link'

const steps = [
  {
    title: 'Conecta tu WooCommerce',
    desc: 'Ingresa URL + Consumer Key/Secret. Validamos acceso y sincronizamos catálogo.',
  },
  {
    title: 'Conecta WhatsApp Cloud API',
    desc: 'Configura Verify Token y pegamos tu Access Token/Phone Number ID. Probamos webhook.',
  },
  {
    title: 'Configura pagos',
    desc: 'Transbank Webpay Plus (Chile) o link externo. Luego sumamos más proveedores.',
  },
  {
    title: 'Activa “Repetir última compra”',
    desc: 'Define reglas: mínimo de compra, zonas, horarios, mensajes.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <header className="flex items-center justify-between">
          <div className="font-semibold tracking-tight">ChatCart · Console</div>
          <nav className="flex gap-6 text-sm text-slate-600">
            <Link href="/onboarding" className="hover:text-slate-900">Onboarding</Link>
            <Link href="/merchants" className="hover:text-slate-900">Tiendas</Link>
            <Link href="/status" className="hover:text-slate-900">Estado</Link>
          </nav>
        </header>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <p className="text-sm font-medium text-slate-600">MVP (preview)</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Configura ChatCart en 15 minutos.</h1>
          <p className="mt-3 text-slate-700">
            Este panel es la interfaz para que cualquier tienda conecte WooCommerce + WhatsApp Cloud API,
            configure pagos y deje habilitado el flujo de compra + <span className="font-semibold">reorden</span>.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/onboarding" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Empezar onboarding
            </Link>
            <Link href="/status" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Ver estado
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-tight">Primeros pasos</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 p-6">
                <div className="text-sm font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-14 text-xs text-slate-500">© {new Date().getFullYear()} ChatCart</footer>
      </div>
    </main>
  )
}
