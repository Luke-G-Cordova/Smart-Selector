/* eslint-disable @typescript-eslint/no-namespace */
export const Globals = {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'smart-selector-console': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
