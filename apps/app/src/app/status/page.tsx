export default function StatusPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Estado del sistema</h1>
        <p className="mt-3 text-slate-700">Placeholder (MVP): aquí mostraremos salud API, webhooks, colas y sincronización.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            ['API', 'pendiente'],
            ['Woo Connector', 'pendiente'],
            ['WhatsApp Webhook', 'pendiente'],
            ['Payments', 'pendiente'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-sm font-semibold">{k}</div>
              <div className="mt-2 text-sm text-slate-600">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
