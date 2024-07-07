function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);
  const colorBuffer = initColorBuffer(gl);

  return {
    position: positionBuffer,
    color: colorBuffer,
  };
}

function initPositionBuffer(gl) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.
  const positions = [2.0, 2.0, -2.0, 2.0, 2.0, -2.0, -2.0, -2.0];

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

export { initBuffers };

function initColorBuffer(gl) {
  const colors = [
    0.0,
    1.0,
    1.0,
    1.0, // Cyan
    1.0,
    0.0,
    0.0,
    1.0, // red
    0.0,
    0.0,
    1.0,
    1.0, // green
    1.0,
    1.0,
    0.0,
    1.0, // yellow
  ];

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return colorBuffer;
}
