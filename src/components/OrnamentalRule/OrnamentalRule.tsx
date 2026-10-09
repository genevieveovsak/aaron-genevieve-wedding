type OrnamentalRuleProps = {
  className?: string;
};

export function OrnamentalRule({ className = '' }: OrnamentalRuleProps) {
  return (
    <div className={`ornamental-rule ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}
