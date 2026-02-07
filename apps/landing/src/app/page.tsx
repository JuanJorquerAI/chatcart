import Link from 'next/link'

const pricing = [
  { name: 'Starter', monthly: '$59.000', fee: '1,5%', note: 'Para tiendas chicas y validación rápida.' },
  { name: 'Pro', monthly: '$149.000', fee: '1,0%', note: 'Para operación estable y más volumen.' },
  { name: 'Scale', monthly: '$299.000', fee: '0,7%', note: 'Para equipos y múltiples teléfonos.' },
]

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  )
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-xs font-medium tracking-wider text-teal-200/90">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 text-sm leading-6 text-slate-300">{desc}</p> : null}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A12] text-slate-100">
      {/* subtle background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-sm font-semibold">CC</div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">ChatCart</div>
              <div className="text-xs text-slate-400">Conversational commerce B2B</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#como" className="hover:text-white">Cómo funciona</a>
            <a href="#integraciones" className="hover:text-white">Integraciones</a>
            <a href="#seguridad" className="hover:text-white">Seguridad</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a
              href="#demo"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Agendar demo
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <Chip>WooCommerce</Chip>
              <Chip>WhatsApp Cloud API</Chip>
              <Chip>Transbank (Webpay) primero</Chip>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Automatiza ventas por WhatsApp, conectado a tu WooCommerce.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Catálogo, carrito, pago y confirmación — con control y auditoría.
              Para clientes recurrentes: <span className="font-semibold text-slate-100">Repetir última compra</span> en segundos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#demo"
                className="rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-[#071018] shadow-sm hover:bg-teal-300"
              >
                Agendar demo
              </a>
              <a
                href="#roi"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Calcular ROI
              </a>
              <Link
                href="/app"
                className="rounded-xl border border-white/15 bg-white/0 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Ver Console
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['Más conversión móvil', 'Menos fricción que checkout web.'],
                ['Más recompra', 'Reorden 1‑click para clientes frecuentes.'],
                ['Menos operación', 'Reduce horas de venta manual.'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="mt-1 text-xs text-slate-300">{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo card */}
          <div id="demo" className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Demo (preview)</div>
                <div className="mt-1 text-xs text-slate-300">Conversación WhatsApp estilizada</div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">MVP</span>
            </div>

            <div className="mt-5 rounded-2xl bg-[#0B1020] p-5">
              <div className="space-y-3 text-sm">
                <div className="max-w-[85%] rounded-2xl bg-white/5 px-4 py-3 text-slate-200">
                  Hola 👋 ¿Tienen stock de alimento para perro?
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl bg-teal-400/15 px-4 py-3 text-slate-100">
                  Sí. ¿Quieres <span className="font-semibold">repetir tu última compra</span> o ver catálogo?
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs">Repetir última compra</span>
                    <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs">Ver catálogo</span>
                  </div>
                </div>
                <div className="max-w-[85%] rounded-2xl bg-white/5 px-4 py-3 text-slate-200">
                  Repetir última compra
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl bg-teal-400/15 px-4 py-3 text-slate-100">
                  Listo. Total estimado: <span className="font-semibold">$28.990</span>. ¿Pagas con Webpay?
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-300">Tiempo a pedido</div>
                <div className="mt-1 text-lg font-semibold">&lt; 60s</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-slate-300">Reorden</div>
                <div className="mt-1 text-lg font-semibold">1 acción</div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como" className="mt-24">
          <SectionTitle
            eyebrow="Flujo"
            title="De conversación a pedido (sin fricción)"
            desc="MVP rules-first: consistente, auditable y seguro."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['1', 'Cliente escribe por WhatsApp'],
              ['2', 'Nuevo: catálogo · Recurrente: reorden'],
              ['3', 'Pago con proveedor configurado'],
              ['4', 'Pedido creado y sincronizado en Woo'],
            ].map(([n, t]) => (
              <div key={n} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs text-slate-300">Paso {n}</div>
                <div className="mt-2 text-sm font-semibold">{t}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section id="integraciones" className="mt-24">
          <SectionTitle
            eyebrow="Ecosistema"
            title="Integraciones pensadas para Chile"
            desc="Primero Woo + WhatsApp Cloud API + Transbank. Luego Shopify y más pagos."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['WooCommerce', 'Productos, stock, precios, pedidos.'],
              ['WhatsApp Cloud API', 'Canal oficial Meta (webhook + sender).'],
              ['Pagos (plugin)', 'Transbank Webpay Plus + Flow/Khipu/MercadoPago/link externo.'],
            ].map(([h, p]) => (
              <div key={h} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold">{h}</div>
                <div className="mt-2 text-sm text-slate-300">{p}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section id="seguridad" className="mt-24">
          <SectionTitle
            eyebrow="Control"
            title="Seguridad, auditoría y multi‑tenant"
            desc="Diseñado para operar como producto B2B (no un bot suelto)."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Aislamiento por tienda', 'Todo se particiona por merchantId.'],
              ['Webhooks verificados', 'Meta / Woo / pagos con firmas.'],
              ['Auditoría', 'Registro de acciones por conversación.'],
            ].map(([h, p]) => (
              <div key={h} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold">{h}</div>
                <div className="mt-2 text-sm text-slate-300">{p}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ROI */}
        <section id="roi" className="mt-24">
          <SectionTitle
            eyebrow="ROI"
            title="Calcula impacto en conversión y horas de operación"
            desc="En la próxima iteración queda interactiva (inputs). Por ahora, marco el marco mental de venta B2B."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Conversión', 'Menos pasos → más pagos completados.'],
              ['Recompra', 'Reorden reduce fricción en clientes frecuentes.'],
              ['Costo operativo', 'Menos tiempo humano por pedido.'],
            ].map(([h, p]) => (
              <div key={h} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold">{h}</div>
                <div className="mt-2 text-sm text-slate-300">{p}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-24">
          <SectionTitle
            eyebrow="Pricing"
            title="Fee mensual + % por venta atribuida"
            desc="Estructura B2B: cubre costos fijos y alinea incentivos por venta."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((p) => (
              <div key={p.name} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="mt-3 text-4xl font-semibold tracking-tight">{p.monthly}</div>
                <div className="mt-1 text-sm text-slate-300">/ mes + {p.fee} por venta</div>
                <div className="mt-4 text-xs text-slate-400">{p.note}</div>
                <a
                  href="#demo"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Agendar demo
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">
            *Rangos iniciales de prueba. Ajustables por volumen, soporte y proveedores de pago.
          </p>
        </section>

        <footer className="mt-20 border-t border-white/10 py-10 text-xs text-slate-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} ChatCart · Built by AW</span>
            <span className="text-slate-500">Preview: <span className="text-slate-300">/app</span> (Console)</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
