import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Preloader = () => {
    const preloaderRef = useRef(null);

    const loadingControls = useAnimation();
    const pathControls = useAnimation();
    const preloaderControls = useAnimation();

    useEffect(() => {
        const shapes = {
            start: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
            end: "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        };

        const animateSequence = async () => {
            await loadingControls.start({
                opacity: 0,
                y: -50,
                transition: { delay: 1.2, duration: 0.6 }
            });

            await pathControls.start({
                d: shapes.start,
                transition: { duration: 0.6, ease: "easeInOut" }
            });

            await pathControls.start({
                d: shapes.end,
                transition: { duration: 0.6, ease: "easeInOut" }
            });

            await preloaderControls.start({
                y: -1000,
                transition: { duration: 0.8 }
            });

            if (preloaderRef.current) {
                preloaderRef.current.style.display = "none";
            }
        };

        animateSequence();
        window.scrollTo(0, 0)
    }, [loadingControls, pathControls, preloaderControls]);

    return (
        <motion.div
            className="preloader"
            ref={preloaderRef}
            initial={{ y: 0 }}
            animate={preloaderControls}
        >
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <motion.path
                    id="loade-svg"
                    d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
                    animate={pathControls}
                    fill="#000"
                />
            </svg>
            <div className="loader-main">
                <motion.div
                    className="loading"
                    initial={{ opacity: 1, y: 0 }}
                    animate={loadingControls}
                >
                    <span data-text="L">L</span>
                    <span data-text="O">O</span>
                    <span data-text="A">A</span>
                    <span data-text="D">D</span>
                    <span data-text="I">I</span>
                    <span data-text="N">N</span>
                    <span data-text="G">G</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
