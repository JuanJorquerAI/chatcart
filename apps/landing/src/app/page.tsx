import Link from 'next/link'

const pricing = [
  { name: 'Starter', monthly: '$59.000', fee: '1,5%' },
  { name: 'Pro', monthly: '$149.000', fee: '1,0%' },
  { name: 'Scale', monthly: '$299.000', fee: '0,7%' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="flex items-center justify-between">
          <div className="font-semibold tracking-tight">ChatCart</div>
          <nav className="flex gap-6 text-sm text-slate-600">
            <a href="#como" className="hover:text-slate-900">Cómo funciona</a>
            <a href="#integraciones" className="hover:text-slate-900">Integraciones</a>
            <a href="#seguridad" className="hover:text-slate-900">Seguridad</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          </nav>
        </header>

        <section className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium text-slate-600">WooCommerce + WhatsApp Cloud API (Meta)</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Automatiza ventas por WhatsApp, conectado a tu WooCommerce.
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Catálogo, carrito, pago y confirmación — sin depender de un vendedor pegado al teléfono.
              Para clientes recurrentes: <span className="font-semibold">Repetir última compra</span> en segundos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Agendar demo
              </a>
              <a
                href="#roi"
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Calcular ROI
              </a>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• Pagos configurables (Chile: <span className="font-medium">Transbank Webpay Plus</span> primero)</li>
              <li>• Multi-tenant con aislamiento por tienda</li>
              <li>• Auditoría por conversación</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-700">Demo (placeholder)</div>
            <div className="mt-3 rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm">
              <p className="font-medium">Cliente:</p>
              <p>Hola 👋</p>
              <p className="mt-3 font-medium">ChatCart:</p>
              <p>¿Quieres <span className="font-semibold">repetir tu última compra</span> o ver catálogo?</p>
              <p className="mt-2 text-slate-500">[Botón] Repetir última compra</p>
              <p className="text-slate-500">[Botón] Ver catálogo</p>
            </div>
          </div>
        </section>

        <section id="como" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Cómo funciona</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['1', 'El cliente escribe por WhatsApp'],
              ['2', 'Nuevo: catálogo guiado / Recurrente: reorden'],
              ['3', 'Pago con el proveedor configurado'],
              ['4', 'Pedido creado y sincronizado en WooCommerce'],
            ].map(([n, t]) => (
              <div key={n} className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-900">Paso {n}</div>
                <div className="mt-2 text-sm text-slate-600">{t}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="integraciones" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Integraciones</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['WooCommerce', 'Productos, stock, precios y pedidos'],
              ['WhatsApp Cloud API', 'Mensajería oficial Meta'],
              ['Pagos (plugin)', 'Transbank primero + otros proveedores'],
            ].map(([h, p]) => (
              <div key={h} className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold">{h}</div>
                <div className="mt-2 text-sm text-slate-600">{p}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="seguridad" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Seguridad y control</h2>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>• Aislamiento por tienda (multi-tenant)</li>
            <li>• Verificación de webhooks (Meta/Woo/pagos)</li>
            <li>• Auditoría por conversación y acciones</li>
          </ul>
        </section>

        <section id="roi" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Calculadora ROI (simple)</h2>
          <p className="mt-3 text-sm text-slate-600">
            Placeholder: en la siguiente iteración la dejo interactiva (inputs: pedidos/mes, ticket promedio, % recompra, horas soporte).
          </p>
        </section>

        <section id="pricing" className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-3 text-sm text-slate-600">Fee mensual + % por venta atribuida (solo pedidos creados por ChatCart).</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-200 p-6">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight">{p.monthly}</div>
                <div className="mt-1 text-sm text-slate-600">/ mes + {p.fee} por venta</div>
                <a href="#contacto" className="mt-5 inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                  Agendar demo
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Agendar demo</h2>
          <p className="mt-3 text-sm text-slate-600">
            Placeholder: integraremos calendario / formulario.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="#" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Enviar solicitud
            </Link>
            <span className="self-center text-sm text-slate-500">(se conecta a Calendar/Notion luego)</span>
          </div>
        </section>

        <footer className="mt-16 text-xs text-slate-500">
          © {new Date().getFullYear()} ChatCart · Built by AW
        </footer>
      </div>
    </main>
  )
}
