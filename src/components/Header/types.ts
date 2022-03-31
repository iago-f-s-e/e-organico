export type IconType = 'navigate-go-back' | 'arrow-right' | 'off';

export type Props = {
  iconType: IconType;
  handle: () => void;
};
