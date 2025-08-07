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
        
        // 检查是否是目录
        const fs = await import('fs/promises')
        const stat = await fs.stat(sourcePath)
        
        if (stat.isDirectory()) {
          // 如果是目录，递归复制
          await copyDirectory(sourcePath, destPath)
        } else {
          // 如果是文件，直接复制
          await fs.copyFile(sourcePath, destPath)
        }
        console.log(`Copied: ${file}`)
      }
    }
  } catch (error) {
    console.error('Error copying public files:', error)
    // 如果递归复制失败，尝试直接复制所有文件
    try {
      const { execSync } = await import('child_process')
      execSync(`xcopy "${publicDir}\\*" "${distDir}\\" /E /I /Y /EXCLUDE:index.html`, { stdio: 'inherit' })
      console.log('Fallback: Used xcopy to copy files')
    } catch (fallbackError) {
      console.error('Fallback copy also failed:', fallbackError)
    }
  }
}

// 递归复制目录
async function copyDirectory(src, dest) {
  const fs = await import('fs/promises')
  await fs.mkdir(dest, { recursive: true })
  const entries = await fs.readdir(src, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name)
    const destPath = join(dest, entry.name)
    
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath)
    } else {
      await fs.copyFile(srcPath, destPath)
    }
  }
}

// 先复制public文件
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
  format: 'iife', // 改回iife格式
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