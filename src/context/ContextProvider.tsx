import React , { FC, ReactNode } from 'react';

// Context Provider Function Definition
function ContextProvider(
  ...components: FC<{ children: ReactNode }>[]
): FC<{ children: ReactNode }> {
  return components.reduce(
    function CombinedComponents(
      AccumulatedComponents: FC<{ children: ReactNode }>,
      CurrentComponent: FC<{ children: ReactNode }>
    ): FC<{ children: ReactNode }> {
      return function ComponentWrapper({ children }: { children: ReactNode }): React.JSX.Element {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    }
  );
}

export default ContextProvider;
