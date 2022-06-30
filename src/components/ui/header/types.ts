export type IconType = 'navigate-go-back' | 'arrow-right' | 'off';

export type Props = {
  iconType?: IconType;
  title?: string;
  subTitle?: string;
  handle?: () => void;
};
