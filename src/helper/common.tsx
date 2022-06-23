export const commonExceptionForm = async (
  requestFunc: Function,
  exceptFunc: Function
) => {
  try {
    if (requestFunc) await requestFunc();
  } catch (e) {
    if (typeof exceptFunc === "function") {
      exceptFunc(e);
    }
  }
};
