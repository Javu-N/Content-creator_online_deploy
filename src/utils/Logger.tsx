class Logger {
  static debug(message: string, location: string): void {
    console.log(`DEBUG-${location}: ${message}`);
  }

  static error(message: string, location: string): void {
    console.log(`ERROR-${location}: ${message}`);
  }
}

export { Logger };
