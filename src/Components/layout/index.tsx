import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import HeaderComponent from "./header";
import { Children } from "react";

const LayoutProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={HeaderComponent}
      Title={(titleProps) => <ThemedTitleV2 {... titleProps} text='RefineV2'/>}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default LayoutProvider;
