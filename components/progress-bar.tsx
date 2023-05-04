import React, { ReactNode } from "react";

interface Props {
  progress: number;
  width: number;
}

function ProgressBar({ width, progress }: Props) {
  const Parentdiv = {
    height: 10,
    width: `${width}%`,
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#52CC7A",
    borderRadius: 40,
    //textAlign: 'right'
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
