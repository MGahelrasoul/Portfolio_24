// Disable react-refresh warnings globally
if (process.env.NODE_ENV === 'development') {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === 'string' && /react-refresh|only-export-components/.test(args[0])) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
}