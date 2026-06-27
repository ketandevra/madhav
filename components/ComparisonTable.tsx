import { qualityBrands } from "@/lib/data/products";
import { comparisonFeatureIcons, QualityTierIcon } from "@/lib/icons";

const FEATURES = [
  { key: "cleaningPower" as const, label: "Cleaning Power" },
  { key: "foam" as const, label: "Foam Quality" },
  { key: "fragrance" as const, label: "Fragrance" },
  { key: "recommendedUse" as const, label: "Recommended Use" },
  { key: "priceCategory" as const, label: "Price Category" },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
      <div className="max-w-full overflow-x-auto overscroll-x-contain">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-100">
              <th className="w-40 bg-stone-50/80 px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400">
                Feature
              </th>
              {qualityBrands.map((brand) => (
                <th key={brand.id} className={`px-4 py-4 text-center ${brand.tableColumnBg}`}>
                  <div className={`mx-auto mb-2.5 h-1 w-10 rounded-full bg-gradient-to-r ${brand.headerGradient}`} />
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${brand.badge}`}
                  >
                    <QualityTierIcon tier={brand.id} className="h-3.5 w-3.5" />
                    {brand.name}
                  </span>
                  <div className="mt-1.5 text-xs font-medium text-stone-500">{brand.tier}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {FEATURES.map((feature, idx) => {
              const FeatureIcon = comparisonFeatureIcons[feature.key];
              return (
                <tr key={feature.key} className={idx % 2 === 0 ? "bg-white" : "bg-stone-50/40"}>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-2 font-medium text-stone-700">
                      <FeatureIcon className="h-4 w-4 text-stone-400" aria-hidden />
                      {feature.label}
                    </span>
                  </td>
                  {qualityBrands.map((brand) => (
                    <td
                      key={brand.id}
                      className={`px-4 py-3.5 text-center text-stone-600 ${brand.tableColumnBg}`}
                    >
                      {brand.features[feature.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
