type RoundBarnMarkProps = {
  className?: string;
};

export function RoundBarnMark({ className = '' }: RoundBarnMarkProps) {
  return <img className={`round-barn-mark ${className}`} src="/images/round-barn.png" alt="Line drawing of the Round Barn Farm" />;
}
