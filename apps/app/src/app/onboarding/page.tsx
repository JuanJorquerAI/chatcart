'use client'

import { useEffect, useMemo, useState } from 'react'

type Merchant = { id: string; name: string }

type StatusResponse = {
  ok: boolean
  merchant: Merchant
  woo: { configured: boolean; ok: boolean; details: any }
  whatsapp: { configured: boolean; ok: boolean; details: any }
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-3 text-sm text-slate-300">{children}</div>
    </div>
  )
}

export default function OnboardingPage() {
  const [apiBase, setApiBase] = useState('http://localhost:4010')
  const [merchant, setMerchant] = useState<Merchant | null>(null)
  const [status, setStatus] = useState<StatusResponse | null>(null)
  const [busy, setBusy] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const merchantId = merchant?.id || ''

  useEffect(() => {
    const stored = localStorage.getItem('chatcart.onboarding')
    if (!stored) return
    try {
      const j = JSON.parse(stored)
      if (j.apiBase) setApiBase(j.apiBase)
      if (j.merchant) setMerchant(j.merchant)
    } catch {}
  }, [])

  useEffect(() => {
    localStorage.setItem('chatcart.onboarding', JSON.stringify({ apiBase, merchant }))
  }, [apiBase, merchant])

  async function call<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${apiBase}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
      ...init,
    })
    const text = await res.text()
    const data = text ? JSON.parse(text) : null
    if (!res.ok) {
      throw new Error(data?.message ? JSON.stringify(data.message) : `HTTP ${res.status}`)
    }
    return data
  }

  async function refreshStatus() {
    if (!merchantId) return
    const s = await call<StatusResponse>(`/merchants/${merchantId}/status`)
    setStatus(s)
  }

  const [woo, setWoo] = useState({ storeUrl: '', consumerKey: '', consumerSecret: '' })
  const [wa, setWa] = useState({ verifyToken: '' })

  const statusLabel = useMemo(() => {
    if (!status) return '—'
    return `Woo: ${status.woo.configured ? 'configurado' : 'no'} · WhatsApp: ${status.whatsapp.configured ? 'configurado' : 'no'}`
  }, [status])

  return (
    <main className="min-h-screen bg-[#070A12] text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Onboarding (Slice #1)</h1>
          <p className="text-sm text-slate-300">
            Objetivo: configurar Woo + WhatsApp y obtener estados <span className="font-semibold text-slate-100">OK</span>.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card title="API Base URL">
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
              value={apiBase}
              onChange={(e) => setApiBase(e.target.value)}
              placeholder="http://localhost:4010"
            />
            <p className="mt-2 text-xs text-slate-400">
              Para GitHub Pages, la API corre local o en un server aparte. Este wizard asume API en localhost.
            </p>
          </Card>

          <Card title="Merchant">
            <div className="mt-1 text-xs text-slate-400">Estado: {statusLabel}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                className="rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-[#071018] hover:bg-teal-300 disabled:opacity-50"
                disabled={!!busy}
                onClick={async () => {
                  setError(null)
                  setBusy('create-merchant')
                  try {
                    const r = await call<{ ok: boolean; merchant: Merchant }>(`/merchants`, {
                      method: 'POST',
                      body: JSON.stringify({ name: 'Mi tienda' }),
                    })
                    setMerchant(r.merchant)
                    await refreshStatus()
                  } catch (e: any) {
                    setError(e.message)
                  } finally {
                    setBusy(null)
                  }
                }}
              >
                Crear Merchant
              </button>
              <button
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 disabled:opacity-50"
                disabled={!!busy || !merchantId}
                onClick={async () => {
                  setError(null)
                  setBusy('refresh')
                  try {
                    await refreshStatus()
                  } catch (e: any) {
                    setError(e.message)
                  } finally {
                    setBusy(null)
                  }
                }}
              >
                Refrescar status
              </button>
              <button
                className="rounded-xl border border-white/10 bg-white/0 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5 disabled:opacity-50"
                disabled={!!busy}
                onClick={() => {
                  setMerchant(null)
                  setStatus(null)
                  localStorage.removeItem('chatcart.onboarding')
                }}
              >
                Reset
              </button>
            </div>
            {merchantId ? <div className="mt-3 text-xs text-slate-400">merchantId: {merchantId}</div> : null}
          </Card>

          <Card title="Errores">
            {error ? (
              <pre className="whitespace-pre-wrap rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-200">
                {error}
              </pre>
            ) : (
              <div className="text-xs text-slate-400">Sin errores.</div>
            )}
          </Card>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card title="Paso 1 — WooCommerce">
            <div className="grid gap-3">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                value={woo.storeUrl}
                onChange={(e) => setWoo((w) => ({ ...w, storeUrl: e.target.value }))}
                placeholder="https://tu-tienda.cl"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                value={woo.consumerKey}
                onChange={(e) => setWoo((w) => ({ ...w, consumerKey: e.target.value }))}
                placeholder="ck_..."
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                value={woo.consumerSecret}
                onChange={(e) => setWoo((w) => ({ ...w, consumerSecret: e.target.value }))}
                placeholder="cs_..."
              />
              <div className="flex flex-wrap gap-2">
                <button
                  className="rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-[#071018] hover:bg-teal-300 disabled:opacity-50"
                  disabled={!!busy || !merchantId}
                  onClick={async () => {
                    setError(null)
                    setBusy('woo-save')
                    try {
                      await call(`/merchants/${merchantId}/woo`, {
                        method: 'PUT',
                        body: JSON.stringify(woo),
                      })
                      await refreshStatus()
                    } catch (e: any) {
                      setError(e.message)
                    } finally {
                      setBusy(null)
                    }
                  }}
                >
                  Guardar Woo
                </button>
                <button
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 disabled:opacity-50"
                  disabled={!!busy || !merchantId}
                  onClick={async () => {
                    setError(null)
                    setBusy('woo-test')
                    try {
                      await call(`/merchants/${merchantId}/woo/test`, { method: 'POST' })
                      await refreshStatus()
                    } catch (e: any) {
                      setError(e.message)
                    } finally {
                      setBusy(null)
                    }
                  }}
                >
                  Test Woo
                </button>
              </div>
              <div className="text-xs text-slate-400">
                Resultado esperado: status HTTP 200 en `/wp-json/wc/v3/system_status`.
              </div>
            </div>
          </Card>

          <Card title="Paso 2 — WhatsApp Cloud API">
            <div className="grid gap-3">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none"
                value={wa.verifyToken}
                onChange={(e) => setWa((w) => ({ ...w, verifyToken: e.target.value }))}
                placeholder="verify token"
              />
              <div className="flex flex-wrap gap-2">
                <button
                  className="rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-[#071018] hover:bg-teal-300 disabled:opacity-50"
                  disabled={!!busy || !merchantId}
                  onClick={async () => {
                    setError(null)
                    setBusy('wa-save')
                    try {
                      await call(`/merchants/${merchantId}/whatsapp`, {
                        method: 'PUT',
                        body: JSON.stringify(wa),
                      })
                      await refreshStatus()
                    } catch (e: any) {
                      setError(e.message)
                    } finally {
                      setBusy(null)
                    }
                  }}
                >
                  Guardar WhatsApp
                </button>
                <a
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  href={`${apiBase}/webhooks/whatsapp?hub.mode=subscribe&hub.verify_token=${encodeURIComponent(
                    wa.verifyToken || 'change-me',
                  )}&hub.challenge=12345`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Probar verify
                </a>
              </div>
              <div className="text-xs text-slate-400">
                Para Meta real, el webhook URL es: <span className="text-slate-200">{apiBase}/webhooks/whatsapp</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold">Notas</div>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>• Esto es Slice #1: validaciones básicas + persistencia mínima.</li>
            <li>• Próximo: firma X-Hub-Signature-256, conversación rules-first y pagos.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
