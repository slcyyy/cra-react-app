/**
 * UI Actions Button
 */
import type { ReactElement } from "react";
import { useState } from "react";
import { Button } from "antd";
import exec from "pages/lowcode/excutor/exec";

type IProps = {
  script: string;
  children: ReactElement | string;
  wait?: boolean;
};

export const UAButton = ({ script, children }: IProps) => {
  const [loading, setLoading] = useState(false);
  // handle click

  const handleClick = async () => {
    try {
      setLoading(true);
      await exec(script);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return (
    <Button loading={loading} onClick={handleClick}>
      {children}
    </Button>
  );
};
