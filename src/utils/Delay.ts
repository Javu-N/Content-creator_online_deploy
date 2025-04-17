const initialDelay = Number(process.env.DELAY_IN_MS) || 500;
const delay = () => new Promise((resolve) => setTimeout(resolve, initialDelay));

export { delay };
