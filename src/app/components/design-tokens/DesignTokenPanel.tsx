import { Layers3 } from 'lucide-react';
import { designTokens, tokenSections } from '../../design/tokens';

function ColorSwatch({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-5 w-5 rounded-md border border-black/10" style={{ backgroundColor: value }} />
      <code className="text-[11px] text-gray-500">{value}</code>
    </div>
  );
}

export function DesignTokenPanel() {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <Layers3 className="h-5 w-5 text-sky-600" />
        <h2 className="text-lg font-bold text-gray-900">Design Tokens</h2>
      </div>

      <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Base Font</div>
        <div className="mt-2 text-sm font-semibold text-slate-900">{designTokens.font.bodyRegular.fontFamily}</div>
        <div className="mt-1 text-xs text-slate-500">Current UI colors, CTA fills, borders, and type scales should reference these tokens.</div>
      </div>

      <div className="space-y-5">
        {tokenSections.map((section) => (
          <section key={section.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 px-3 py-3">
                  <div className="text-sm font-medium text-slate-900">{label}</div>
                  {String(value).startsWith('#') ? (
                    <ColorSwatch value={String(value)} />
                  ) : (
                    <code className="text-right text-[11px] text-slate-500">{value}</code>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
