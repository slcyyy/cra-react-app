import ShoppingCarParabola from "pages/animation/shoppingCarParabola";
import TestAnimationCSS from "pages/animation/testAnimationCSS";
export default [
  {
    path: "/animation",
    children: [
      {
        path: "shoppingCarParabola",
        element: <ShoppingCarParabola />,
      },
      {
        path: "testAnimationCSS",
        element: <TestAnimationCSS />,
      },
    ],
  },
];
