import { publicAsset } from '../../lib/assets';

type RoundBarnMarkProps = {
  className?: string;
};

export function RoundBarnMark({ className = '' }: RoundBarnMarkProps) {
  return <img className={`round-barn-mark ${className}`} src={publicAsset('images/round-barn.png')} alt="Line drawing of the Round Barn Farm" />;
}
