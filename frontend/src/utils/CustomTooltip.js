// utils/CustomTooltip.js
export function CustomTooltip({ active, payload, label, unit }) {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#fff", padding: "8px 12px", border: "1px solid #ccc", borderRadius: 6 }}>
        <p style={{ margin: 0, fontWeight: "bold" }}>{label}</p>
        <p style={{ margin: 0 }}>
          {payload[0].value} {unit}
        </p>
      </div>
    );
  }
  return null;
}
