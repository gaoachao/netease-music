import { Toast } from "../models/Toast";
import { ToastsStore } from "../mobx/toasts";
export const showToast = (value:string,severity:Toast['severity']) => {
  ToastsStore.addToast(value, severity);
  // console.log(ToastsStore);
}