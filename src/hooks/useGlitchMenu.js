import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const useGlitchMenu = () => {
    const canvasRef = useRef(null);
    const indices = useRef([]);
    const currentCellIndex = useRef(0);
    const isFilling = useRef(true); // Tracks whether we are filling or clearing
    const requestRef = useRef(null);

    const setupCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return null;
        const ctx = canvas.getContext('2d');
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        canvas.width = width; // This clears the canvas
        canvas.height = height;
        return { ctx, width, height, numCols: Math.ceil(width / 50), numRows: Math.ceil(height / 50) };
    };

    const fillSquares = () => {
        const canvasSetup = setupCanvas();
        if (!canvasSetup) return;
        const { ctx, numCols, numRows } = canvasSetup;
        indices.current = shuffleIndices(numCols * numRows);
        currentCellIndex.current = 0;
        isFilling.current = true;
        animate(ctx, numCols, numRows);
    };

    const clearSquares = () => {
        isFilling.current = false;
        // Reset the current index to the last filled position if full
        if (currentCellIndex.current >= indices.current.length) {
            currentCellIndex.current = indices.current.length - 1;
        }
        animate(canvasRef.current.getContext('2d'), Math.ceil(canvasRef.current.offsetWidth / 50), Math.ceil(canvasRef.current.offsetHeight / 50));
    };

    const animate = (ctx, numCols, numRows) => {
        cancelAnimationFrame(requestRef.current); // Stop any previous animations
        const maxSquaresPerFrame = 30;

        function step() {
            let actionCount = 0;
            while (actionCount < maxSquaresPerFrame && currentCellIndex.current < indices.current.length && currentCellIndex.current >= 0) {
                const index = indices.current[currentCellIndex.current];
                const col = index % numCols;
                const row = Math.floor(index / numCols);
                if (isFilling.current) {
                    gsap.to(ctx, {
                        duration: 0.5,
                        onUpdate: () => {
                            ctx.fillStyle = 'black';
                            ctx.fillRect(col * 50, row * 150, 150, 150);
                        }
                    });
                    currentCellIndex.current++;
                } else {
                    gsap.to(ctx, { 
                        duration: 0.5,
        
                        onUpdate: () => {
                            ctx.clearRect(col * 50, row * 150, 150, 150);
                        }
                    });
                    currentCellIndex.current--;
                }
                actionCount++;
            }
            if ((isFilling.current && currentCellIndex.current < indices.current.length) ||
                (!isFilling.current && currentCellIndex.current >= 0)) {
                requestRef.current = requestAnimationFrame(step);
            } else {
                cancelAnimationFrame(requestRef.current); // Ensures animation stops at the right condition
            }
        }
        step();
    };

    const shuffleIndices = (numCells) => {
        const array = Array.from({ length: numCells }, (_, i) => i);
        for (let i = numCells - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        };
    }, []);

    return { canvasRef, fillSquares, clearSquares };
};

export default useGlitchMenu;






 

