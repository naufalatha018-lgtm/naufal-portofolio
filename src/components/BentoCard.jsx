export default function BentoCard({ children, className = '', as: Tag = 'div', ...props }) {
  return (
    <Tag className={`bento-card group ${className}`} {...props}>
      <span className="ic-pin -top-1 -left-1" />
      <span className="ic-pin -top-1 -right-1" />
      <span className="ic-pin -bottom-1 -left-1" />
      <span className="ic-pin -bottom-1 -right-1" />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </Tag>
  );
}
