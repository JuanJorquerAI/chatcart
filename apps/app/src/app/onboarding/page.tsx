const items = [
  {
    title: 'Paso 1 — WooCommerce',
    checks: ['URL de tienda', 'Consumer Key/Secret', 'Test: listar categorías'],
  },
  {
    title: 'Paso 2 — WhatsApp Cloud API',
    checks: ['Verify token', 'Webhook URL', 'Access token', 'Phone Number ID', 'Test: recibir “hola”'],
  },
  {
    title: 'Paso 3 — Pagos',
    checks: ['Transbank Webpay Plus (MVP)', 'Link externo (fallback)', 'Webhook confirmación'],
  },
]

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Onboarding guiado</h1>
        <p className="mt-3 text-slate-700">
          Este wizard será el “ayudante” para configurar ChatCart. Por ahora es UI placeholder.
        </p>

        <div className="mt-10 space-y-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-sm font-semibold">{it.title}</div>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {it.checks.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="text-sm font-semibold">Ayudante</div>
          <p className="mt-2 text-sm text-slate-600">
            Próximo: validaciones automáticas (ej: “Webhook OK”, “Woo API OK”) y mensajes accionables.
          </p>
        </div>
      </div>
    </main>
  )
}
