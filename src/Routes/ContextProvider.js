import React, {
    createContext,
    useState,
  } from 'react';

  
  export const Context = createContext();
  
  
  const ContextProvider = ({ children}) => {
    const [selectedProject, setSelectedProject] = useState();
    const [chats, setChats] = useState();
  
    return (
      <Context.Provider
        value={{selectedProject, setSelectedProject}}>
        {children}
      </Context.Provider>
    );
  };
  
  export default ContextProvider;