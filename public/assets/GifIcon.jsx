import React from "react";

export default function GifIcon({ size = "24", color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M18.75 3.501A3.25 3.25 0 0 1 22 6.751v10.503a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 17.254V6.75A3.25 3.25 0 0 1 5.25 3.5h13.5Zm0 1.5H5.25a1.75 1.75 0 0 0-1.75 1.75v10.503c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.75A1.75 1.75 0 0 0 18.75 5ZM8.015 8.872c.596 0 1.019.082 1.502.314a.625.625 0 0 1-.541 1.127c-.3-.144-.54-.19-.961-.19c-.867 0-1.504.796-1.504 1.872c0 1.077.638 1.876 1.504 1.876c.428 0 .791-.18.98-.501L9 13.355v-.734h-.376a.625.625 0 0 1-.618-.532L8 11.997c0-.314.231-.574.533-.619l.092-.006h1.002c.314 0 .573.23.618.532l.007.093l-.002 1.547l-.006.056l-.021.09l-.02.055c-.377.89-1.241 1.376-2.188 1.376c-1.626 0-2.754-1.413-2.754-3.126c0-1.713 1.127-3.123 2.754-3.123Zm4.614.122c.314 0 .574.232.618.533l.007.092v4.763a.625.625 0 0 1-1.243.092l-.007-.092V9.619c0-.345.28-.625.625-.625Zm2.996 0l1.997.007a.625.625 0 0 1 .088 1.244l-.092.006l-1.371-.005V12h1.123c.314 0 .574.232.618.534l.007.092a.625.625 0 0 1-.533.618l-.092.007l-1.123-.001v1.115a.625.625 0 0 1-.532.619l-.092.006a.625.625 0 0 1-.619-.532l-.006-.093V9.617a.625.625 0 0 1 .534-.616l.093-.007Z"
      />
    </svg>
  );
}