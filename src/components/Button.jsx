/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";

export default function Button({ children, className = "", href = "#", txt = "" }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [baseWidth, setBaseWidth] = useState(null);

  const color = (className == 'btn-Primary') ? 'white' : 'var(--border-primary)';

  const handleMouseEnter = () => {
    if (!ref.current) return;

    // Si no hay baseWidth guardado aún, lo guardamos
    if (!baseWidth) {
      setBaseWidth(ref.current.offsetWidth);
    }

    // Cancela cualquier animación anterior
    controls.stop();

    // Anima a +30px respecto al ancho original
    controls.start({
      width: (baseWidth || ref.current.offsetWidth) + 30,
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    // Cancela animaciones anteriores
    controls.stop();

    // Vuelve al ancho original (no lo recalcula)
    controls.start({
      width: baseWidth || ref.current.offsetWidth,
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };


  return (
    <motion.a
      ref={ref}
      href={href}
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group ${className}`}
    >
      <span
        className="absolute opacity-0 group-hover:opacity-100 flecha animate"
        aria-hidden="true"
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.79779 0.834124C1.84843 0.784429 1.90394 0.752463 1.97802 0.739521L2.05881 0.733306H11.8851C11.961 0.734011 12.0089 0.745645 12.0377 0.757475L12.0384 0.758165C12.0748 0.773176 12.109 0.795618 12.1427 0.82929C12.1763 0.862977 12.1979 0.896722 12.2124 0.93218L12.2131 0.932871C12.2249 0.961396 12.2368 1.00931 12.2373 1.08548L12.2331 10.9159C12.2324 11.0443 12.1951 11.1183 12.1365 11.1769C12.0793 11.2339 12.011 11.2676 11.8913 11.266H11.8844L11.805 11.2598C11.7331 11.2474 11.6818 11.2166 11.6358 11.1707C11.5901 11.125 11.5598 11.0738 11.5474 11.0022L11.5412 10.9228V1.92655L2.05881 11.409C1.97245 11.4953 1.89652 11.5215 1.81091 11.5215L1.81022 11.5222C1.7241 11.5222 1.64791 11.4952 1.56162 11.409C1.47535 11.3227 1.44841 11.2465 1.44838 11.1604L1.44907 11.1597C1.44908 11.0741 1.47531 10.9981 1.56162 10.9118L11.044 1.42936H2.05605C1.96931 1.42934 1.90554 1.41052 1.85096 1.37343L1.79917 1.32993C1.73492 1.26697 1.70139 1.19644 1.70111 1.08272V1.08134C1.7008 0.967681 1.73384 0.896972 1.79779 0.834124Z" fill={color} stroke={color} />
        </svg>
      </span>
      <span
        className="relative z-10 block text-end animate"
      >
        {txt}
      </span>
      {children}
    </motion.a>
  );
}
