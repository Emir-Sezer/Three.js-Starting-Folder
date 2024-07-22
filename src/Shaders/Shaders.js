export const vertex = `
    varying vec2 vUv;

    void main() {
        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

export const fragment = `
    varying vec2 vUv;

    void main() {
        gl_FragColor = vec4(vUv, 0., 1.);
    }
`