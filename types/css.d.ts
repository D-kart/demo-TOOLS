declare module '*.css' {
  const styles: { readonly [key: string]: string }
  export default styles
}

// Allow importing plain CSS files as side effects
declare module '*.css' {}
