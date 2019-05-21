import React from "react";

export default function Field({ children }) {
  return (
    <div className="root">
      <style jsx>{`
        .root {
          width: 30px;
          height: 30px;
          border: 2px solid #222;
          background-color: red;
          border-radius: 2px;
        }
      `}</style>

      {children}
    </div>
  );
}
