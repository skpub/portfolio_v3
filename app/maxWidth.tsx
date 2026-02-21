export default function MaxWidth({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="slot">{children}</div>
    </div>
  );
}
