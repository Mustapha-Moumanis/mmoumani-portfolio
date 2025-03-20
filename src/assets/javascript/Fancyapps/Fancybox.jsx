import React, { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancybox(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};
    console.log(options)

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;

// import { useRef, useEffect } from 'react';
// import { Fancybox as NativeFancybox } from '@fancyapps/ui'; // Assuming this is the Fancybox library you're using

// function Fancybox(props) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     const delegate = props.delegate || "[data-fancybox]";
//     const options = props.options || {};

//     // Disable fullscreen by removing it from the buttons array
//     const modifiedOptions = {
//       ...options,
//       buttons: options.buttons ? options.buttons.filter(btn => btn !== 'fullscreen') : ['close', 'zoom', 'share'], // Ensure fullscreen isn't included
//     };

//     NativeFancybox.bind(container, delegate, modifiedOptions);

//     return () => {
//       NativeFancybox.unbind(container);
//       NativeFancybox.close();
//     };
//   }, [props.options]);

//   return <div ref={containerRef}>{props.children}</div>;
// }

// export default Fancybox;
