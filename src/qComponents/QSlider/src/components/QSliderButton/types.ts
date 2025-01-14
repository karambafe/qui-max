import type { ComputedRef, CSSProperties } from 'vue';

import type { Nullable, ClassValue } from '#/helpers';

type CssPropertyLeft = CSSProperties['left'];

export type QSliderButtonPropPosition = Nullable<CssPropertyLeft>;
export type QSliderButtonPropPathLeft = Nullable<number>;
export type QSliderButtonPropPathWidth = Nullable<number>;

export interface QSliderButtonProps {
  position: QSliderButtonPropPosition;
  pathLeft: QSliderButtonPropPathLeft;
  pathWidth: QSliderButtonPropPathWidth;
  disabled: boolean;
}

export type BtnClasses = ClassValue;

export interface BtnStyles {
  left: CssPropertyLeft;
}

export interface QSliderButtonInstance {
  btnClasses: ComputedRef<BtnClasses>;
  btnStyles: ComputedRef<BtnStyles>;
  handleBtnDown: (event: MouseEvent) => void;
}
