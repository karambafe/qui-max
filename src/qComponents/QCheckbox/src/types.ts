import type { Ref, ComputedRef } from 'vue';

export interface QCheckboxProps {
  modelValue: Nullable<boolean>;
  label: Nullable<string>;
  indeterminate: Nullable<boolean>;
  disabled: Nullable<boolean>;
  rootTag: Nullable<string>;
  validateEvent: Nullable<boolean>;
}

export interface QCheckboxInstance {
  focus: Ref<boolean>;
  isChecked: ComputedRef<boolean>;
  isLimitDisabled: ComputedRef<boolean>;
  isDisabled: ComputedRef<boolean>;
  nativeClick: () => void;
  handleCheckboxClick: () => void;
  checkboxInput: Ref<Nullable<HTMLInputElement>>;
}