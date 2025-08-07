import * as esbuild from 'esbuild'
import { rimraf } from 'rimraf'
import stylePlugin from 'esbuild-style-plugin'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { copyFile, mkdir, readdir } from 'fs/promises'
import { join } from 'path'

const args = process.argv.slice(2)
const isProd = args[0] === '--production'

await rimraf('dist')

// 复制 public 目录中的所有静态文件到 dist 目录（除了 index.html）
async function copyPublicFiles() {
  const publicDir = 'public'
  const distDir = 'dist'
  
  try {
    await mkdir(distDir, { recursive: true })
    const files = await readdir(publicDir)
    for (const file of files) {
      // 跳过 index.html，复制其它所有文件
      if (file !== 'index.html') {
        const sourcePath = join(publicDir, file)
        const destPath = join(distDir, file)
        await copyFile(sourcePath, destPath)
        console.log(`Copied: ${file}`)
      }
    }
  } catch (error) {
    console.error('Error copying public files:', error)
  }
}

// 复制静态文件
await copyPublicFiles()

/**
 * @type {esbuild.BuildOptions}
 */
const esbuildOpts = {
  color: true,
  entryPoints: ['src/main.tsx', 'index.html'],
  outdir: 'dist',
  entryNames: '[name]',
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  loader: {
    '.html': 'copy',
    '.png': 'file',
    '.md': 'text',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
}

if (isProd) {
  await esbuild.build(esbuildOpts)
} else {
  const ctx = await esbuild.context(esbuildOpts)
  await ctx.watch()
  const { hosts, port } = await ctx.serve({
    servedir: 'dist',
    onRequest: (args) => {
      console.log(`${args.method}: ${args.path}`)
    }
  })
  console.log(`Running on:`)
  hosts.forEach((host) => {
    console.log(`http://${host}:${port}`)
  })
}