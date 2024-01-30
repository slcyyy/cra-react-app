import React, { FC, useCallback } from "react";
import { nanoid } from "nanoid";
import { Typography } from "antd";
import useStore from "store";
// import { useDispatch } from 'react-redux'
// import { componentConfGroup, ComponentConfType } from '../../../components/QuestionComponents'
// import { addComponent } from '../../../store/componentsReducer'

const { Title } = Typography;

// function genComponent(c: ComponentConfType) {
//   const { title, type, Component, defaultProps } = c
//   const dispatch = useDispatch()

//   const handleClick = useCallback(() => {
//     // 点击组件添加到页面中
//     dispatch(
//       addComponent({
//         fe_id: nanoid(), // 前端生成的 id
//         title,
//         type,
//         props: defaultProps,
//       })
//     )
//   }, [])

//   return (
//     <div key={type} className={styles.wrapper} onClick={handleClick}>
//       <div className={styles.component}>
//         <Component />
//       </div>
//     </div>
//   )
// }

const Lib: FC = () => {
  const { dashboardStore } = useStore();
  const onDragStart = (e: any) => {
    console.log("start", e);
    // e.preventDefault();
    e.dataTransfer.effectAllowed = "copy";
    dashboardStore.saveMaterial({
      type: "text",
      droppingItem: {
        i: nanoid(),
        w: 1, //layout?.width || 1200,
        h: 1, //layout?.height || 360
      },
    });
  };
  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div onDragOver={onDragOver}>
      <div
        className="w-full h-[30px] bg-red-200 border  border-red-300 border-solid"
        draggable="true"
        onDragStart={onDragStart}
        data-componentId={"001"}
      >
        componentA
      </div>
    </div>
  );
};

export default Lib;

{
  /* {componentConfGroup.map((group, index) => {
        const { groupId, groupName, components } = group
         
        return (
          <div key={groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}>
              {groupName}
            </Title>
            <div>{components.map(c => genComponent(c))}</div>
          </div>
        )
      })} */
}
