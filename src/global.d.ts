export {};

declare global {
  interface Window {
    ChatWidget: (elementId: string) => void;
  }
}
