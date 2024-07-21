import { useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { HomeLayouts, keys } from "./utils/layout.helper";
import Block from "./Block";

const ResponsiveGrid = () => {
  const [layout, setLayout] = useState(HomeLayouts);

  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);

  return (
    <div className="flex-1 m-auto flex justify-between b-10 overflow-auto">
      <ResponsiveReactGridLayout
        className="flex-1"
        breakpoints={{ xl: 1200, lg: 899, md: 768 }}
        cols={{ xl: 3, lg: 4, md: 1 }}
        preventCollision={true}
        rowHeight={200}
        margin={[30, 30]}
        layouts={layout}
        useCSSTransforms={true}
      >
        {keys.map((key) => (
          <div
            key={key}
            className="z-10 flex justify-center items-center shadow-lg rounded-2xl text-2xl text-[#1d1d1f]"
          >
            <Block keyProp={key} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default ResponsiveGrid;
