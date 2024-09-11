import { createContext, useContext, useReducer } from "react";

const ScreenshootGameContext = createContext(null);

const ScreenshootGameDispatchContext = createContext(null);

const ScreenshootGameReducer = (state, action) => {
  switch (action.type) {
    case "GET": {
      return {
        image: action.payload.image,
      };
    }
    default: {
      throw Error("Unkwon Action:" + action.type);
    }
  }
};

export function ScreenshootGameProvider({ children }) {
  const [screenshot, dispatch] = useReducer(ScreenshootGameReducer, {
    image: "",
  });

  return (
    <ScreenshootGameContext.Provider value={screenshot}>
      <ScreenshootGameDispatchContext.Provider value={dispatch}>
        {children}
      </ScreenshootGameDispatchContext.Provider>
    </ScreenshootGameContext.Provider>
  );
}

export function useScreenshot() {
  return useContext(ScreenshootGameContext);
}

export function useScreenshotDispatch() {
  return useContext(ScreenshootGameDispatchContext);
}
