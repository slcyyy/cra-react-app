import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
// import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import useStore from "store";
// const ResponsiveGridLayout = WidthProvider(Responsive);
const ReactGridLayout = WidthProvider(Responsive);

// 拖拽元素在画布中的占位元素信息，用来计算最终的位置信息
// i -- id
// w -- width
// h -- height
const layouts = {
  lg: [
    {
      w: 1,
      h: 1,
      x: 0,
      y: 0,
      i: "1",
    },
    {
      w: 1,
      h: 1,
      x: 1,
      y: 0,
      i: "2",
    },
    {
      w: 1,
      h: 1,
      x: 2,
      y: 0,
      i: "3",
    },
    {
      w: 3,
      h: 1,
      x: 3,
      y: 0,
      i: "4",
    },
    // {
    //   w: 1,
    //   h: 1,
    //   x: 1,
    //   y: 0,
    //   i: "23",
    // },
    // {
    //   w: 1,
    //   h: 1,
    //   x: 1,
    //   y: 0,
    //   i: "32",
    // },
  ],
};

const droppingItem_temp = {
  i: "q",
  w: 2,
  h: 1,
};

export default () => {
  const { dashboardStore } = useStore();
  const { material } = dashboardStore;

  // const layouts =

  // const [droppingItem, setItem] = useState(droppingItem_temp);
  const onDragOver = (e: any) => {
    // 表示这个区域可以拖放，消除禁用的鼠标状态
    e.preventDefault();
  };

  const onDrop = (
    layouts: ReactGridLayout.Layout[],
    item: ReactGridLayout.Layout,
    e: Event
  ) => {
    // 拖拽元素在画布中位置
    const { x, y } = item;
    console.log(item);

    // const dropInfo = {
    //   ...material,
    //   x,
    //   y,
    //   layouts,
    // };
    // addMaterial(dropInfo)
  };

  const onLayoutChange = (currentLayout: ReactGridLayout.Layout[]) => {
    console.log("currentLayout", currentLayout);
  };
  return (
    <div className="w-full h-full bg-white ">
      <div onDragOver={onDragOver} className="w-full h-full bg-white">
        <ReactGridLayout
          className="layout"
          // 初始的layouts
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          // 该字段是判断是否要触发onDrop以及是否允许在画布内拖动
          isDroppable
          onDrop={onDrop}
          // 当释放拖拽目标到画布区域时触发的事件，这里插件帮助我们计算了拖拽元素在画布中最后落下的位置信息
          droppingItem={material?.droppingItem}
          onLayoutChange={onLayoutChange}
          // 是否可以进行拖拽操作
          isDraggable={true}
          isResizable={true}
        >
          <div key="1" className="bg-red-500">
            1
          </div>
          <div key="2" className="bg-red-500">
            2
          </div>
          <div key="3" className="bg-red-500">
            3
          </div>
          <div key="4" className="bg-red-500">
            4
          </div>
        </ReactGridLayout>
      </div>
    </div>
  );
};
