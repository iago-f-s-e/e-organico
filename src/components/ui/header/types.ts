export type IconType = 'navigate-go-back' | 'arrow-right' | 'off';

export type Props = {
  showLogout?: boolean;
  hideBackButton?: boolean;
  iconType?: IconType;
  title?: string;
  subTitle?: string;
  handle?: () => void;
};
