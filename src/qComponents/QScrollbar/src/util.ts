import type { BarMapItem, Styles } from './types';

export const BAR_MAP: Record<'vertical' | 'horizontal', BarMapItem> = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

export const renderThumbStyle = (
  move: number,
  size: string,
  bar: BarMapItem
): Styles => {
  const style: Styles = {};

  style[bar.size] = size;
  const translate = `translate${bar.axis}(${move}%)`;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};
