function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        
      }
      body {
        font-family: "Open Sans", sans-serif;        
      }

      .bn62 {
        color: #1cc49d;
        background-color: #1b2f31;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2em;
        width: 5em;
        font-size: 10px;
        font-weight: 600;
      }

      

      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

export default function MyApp({ Component, pagePropos }) {
  console.log("teste");

  return (
    <>
      <GlobalStyle />
      <Component {...pagePropos} />
    </>
  );
}
