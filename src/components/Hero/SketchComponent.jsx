import React from 'react';
import { Bubble } from './bubble';
import { makeStyles } from '@material-ui/core';
import Sketch from 'react-p5';

/**
 * SET UP CANVAS AS BACKGROUND
 * @returns 
 */

const useStyles = makeStyles({
    sketchcontainer: {
        position: 'fixed',
        zIndex: -1,
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        // opacity: 0.4;
    }
});

const SketchComponent = () => {
    // const { useRef, useState, useLayoutEffect } = React;
    // const containerRef = useRef();
    const classes = useStyles();
    var canvas;
    var bubbles = [];


    const setup = (p) => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        for (var i = 0; i < 20; i++) {
            bubbles[i] = new Bubble(p);
        }
    }

    const draw = (p) => {
        p.background(50);
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
            bubbles[i].show();
        }
    };

    //     p.windowResized = function () {
    //         p.resizeCanvas(p.windowWidth, containerRef.current.clientHeight);
    //         // W = p.width;
    //     };
    // }



    return (
        // <div>
        <Sketch setup={setup} draw={draw} />
        // {/* </div> */ }
    );
};

export default SketchComponent;