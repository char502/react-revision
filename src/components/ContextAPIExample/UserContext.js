import React from "react";

// 3 steps to context:
// 1. Create the context
// 2, Provide a context value
// 3. Consume the context value

const UserContext = React.createContext("Codevolution");

// Default value (Codevolution) is used only when don't have a provider in the component tree

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
