import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
    {
        input: [
            "src/content/main.ts",
        ],
        output: {
            file: "dist/content/app.js",
            format: "es"
        },
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
            copy({
                targets: [{
                    src: [
                        "src/**/*.css",
                        "src/**/*.html",
                        "src/manifest.json"
                    ],
                    dest: "dist"
                }],
                flatten: false
            })
        ]
    },
    {
        input: "src/background.ts",
        output: {
            file: "dist/background.js",
            format: "umd"
        },
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript()
        ]
    }
];

export default config;
