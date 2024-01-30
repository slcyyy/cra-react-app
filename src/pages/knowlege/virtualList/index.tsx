import styled from "styled-components";
import React, { useRef, useEffect, useMemo, useState } from "react";

type PropsTypes = {
  rowHeight: number;
  bufferCount: number;
};

const Container = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid red;
  position: relative;
  overflow: auto;
  .scrollSpace {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .list {
    height: 20px;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
  }
`;

const data = new Array(1000).fill(null).map((item, index) => index);

const VirtualList: React.FC<PropsTypes> = ({
  rowHeight = 20,
  bufferCount = 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSpaceRef = useRef<HTMLDivElement>(null);

  const renderCountRef = useRef(0);
  const [positionIdx, setPositionIdx] = useState({
    start: 0,
    end: 0,
  });
  const [currentOffset, setCurrentOffset] = useState(0);
  const shownList = useMemo(() => {
    return data.slice(positionIdx.start, positionIdx.end);
  }, [positionIdx]);

  useEffect(() => {
    const containerHeight = containerRef.current!.offsetHeight; // 可视区域内的高度
    const renderCount = Math.ceil(containerHeight / rowHeight) + bufferCount;
    renderCountRef.current = renderCount;
    setPositionIdx({ start: 0, end: renderCount });
    if (scrollSpaceRef.current) {
      scrollSpaceRef.current.style.height = rowHeight * data.length + "px";
    }
  }, []);

  // react事件监听是怎么弄的？

  const scrollHandle = () => {
    if (containerRef.current) {
      const { scrollTop } = containerRef.current;
      const start = Math.floor(scrollTop / rowHeight);
      const end = Math.floor(
        scrollTop / rowHeight + renderCountRef.current + 1
      );
      setPositionIdx({ start, end });
      setCurrentOffset(scrollTop - (scrollTop % rowHeight));
    }
  };

  return (
    <div>
      <h1>已知容器高度</h1>
      <section>
        <p>renderCount:{renderCountRef.current}</p>
        <p>
          start:{positionIdx.start} , end:{positionIdx.end}
        </p>
      </section>
      <Container ref={containerRef} onScroll={scrollHandle}>
        {/* absolute脱离文档流 */}
        <div className="scrollSpace" ref={scrollSpaceRef} />
        {/* 3d提升为合成层，设置为translateY没用 */}
        <div
          className="list"
          style={{ transform: `translate3d(0,${currentOffset}px,0)` }}
        >
          {shownList.map((item) => (
            <div style={{ height: `${rowHeight}px` }} key={item}>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default VirtualList;
