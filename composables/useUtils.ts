export const useUtils = () => {
  const sayHello = () =>console.log('Hello');
  const sayGoodbye = () =>console.log('Goodbye');
  return { sayHello, sayGoodbye };
}
