const logger = (store) => (next) => (action) => {
  console.log(`[LOG] Action Type: ${action.type}`);
  console.log(`[LOG] Payload: `, action.payload);
  return next(action);
};
export default logger;