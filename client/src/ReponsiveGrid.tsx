import { useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { HomeLayouts, keys } from "./utils/layout.helper";
import Block from "./Block";

const ReponsiveGrid = () => {
  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);
  return (
    <div className="w-screen m-auto flex justify-between b-10">
      <ResponsiveReactGridLayout
        // className="m-auto w-[900px]"
        breakpoints={{ xl: 1200, lg: 899, md: 768, sm: 480, xs: 200 }}
        cols={{ xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
        rowHeight={200}
        layouts={HomeLayouts}
      >
        {keys.map((key) => (
          <div
            key={key}
            className="bg-[#f5f5f7] flex justify-center items-center shadow-[inset_0_0_0_2px_rgba(0,0,0,0)] rounded-2xl text-2xl text-[#1d1d1f] visible cursor-grab active:cursor-grabbing"
          >
            <Block keyProp={key} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default ReponsiveGrid;
