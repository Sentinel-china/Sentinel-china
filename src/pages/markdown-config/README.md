

# 解决方案页面文档

## 概述

本目录包含解决方案相关的页面组件和文档。解决方案详情页面支持动态加载markdown文档，并应用统一的样式。

## 文件结构

```
solutions/
├── README.md                    # 本文档
├── SolutionDetail.tsx           # 解决方案详情页面组件
├── markdown-styles.css          # Markdown样式文件
└── markdown/                    # Markdown文档目录
    ├── smart-city.md           # 智慧城市解决方案
    ├── new-retail.md           # 新零售数字化平台
    ├── smart-healthcare.md     # 智慧医疗解决方案
    ├── smart-education.md      # 智慧教育平台
    ├── smart-manufacturing.md  # 工业4.0智能制造
    └── fintech.md              # 金融科技解决方案
```

## 功能特性

### 1. 动态文档加载
- 支持从独立的markdown文件加载文档内容
- 自动处理文件不存在的情况，显示默认内容
- 支持错误处理和重试机制

### 2. 统一样式
- 使用`markdown-styles.css`应用统一的markdown样式
- 支持响应式设计，适配各种设备
- 与网站整体主题保持一致

### 3. 易于维护
- 每个解决方案对应一个独立的markdown文件
- 支持标准的markdown语法
- 便于内容管理和更新

## 使用方法

### 添加新的解决方案

1. 在`solutions/markdown/`目录下创建新的markdown文件
2. 文件名格式：`{solution-id}.md`
3. 在`SolutionDetail.tsx`中的`solutionConfig`对象中添加配置
4. 确保markdown文件包含完整的解决方案文档

### 示例：添加新的解决方案

1. 创建文件：`solutions/markdown/ai-platform.md`
2. 在`SolutionDetail.tsx`中添加配置：

```typescript
'ai-platform': {
  icon: Brain, // 从lucide-react导入图标
  title: "AI Platform Solutions",
  description: "Advanced AI platform for enterprise applications.",
  image: "path/to/image.jpg"
}
```

3. 编写markdown内容：

```markdown
# AI Platform Solutions

## 概述

AI平台解决方案旨在为企业提供先进的AI技术和服务...

## 核心功能

### 1. 机器学习平台
- **模型训练**: 自动化模型训练流程
- **模型部署**: 一键模型部署服务
- **模型监控**: 实时模型性能监控
...

## 联系我们

如果您对AI平台解决方案感兴趣，欢迎联系我们：

- **电话**: 400-888-8888
- **邮箱**: ai@example.com
- **地址**: 北京市朝阳区科技园区创新大厦
```

## 技术实现

### 文档加载机制

```typescript
const loadMarkdownContent = async (id: string) => {
  try {
    const response = await fetch(`/src/pages/solutions/markdown/${id}.md`)
    if (response.ok) {
      const content = await response.text()
      setMarkdownContent(content)
    } else {
      // 显示默认内容
    }
  } catch (err) {
    // 错误处理
  }
}
```

### Markdown渲染

使用简化的markdown渲染函数，支持：
- 标题渲染（H1, H2, H3）
- 列表渲染
- 粗体文本
- 段落处理

## 样式定制

可以通过修改`markdown-styles.css`文件来自定义markdown内容的样式：

```css
.markdown-content h1 {
  color: #fbbf24;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.markdown-content h2 {
  color: #f59e0b;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.markdown-content p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1rem;
}
```

## 注意事项

1. **文件命名**: markdown文件名必须与路由参数完全匹配
2. **编码格式**: 确保markdown文件使用UTF-8编码
3. **路径配置**: 确保开发服务器能够正确访问markdown文件
4. **错误处理**: 系统会自动处理文件不存在的情况

## 维护指南

### 定期检查
- 确保所有markdown文件都能正常加载
- 检查文档内容的时效性和准确性
- 验证样式在不同设备上的显示效果

### 内容更新
- 定期更新解决方案的技术架构信息
- 更新成功案例和客户反馈
- 保持联系信息的准确性

### 性能优化
- 考虑对大型markdown文件进行分页处理
- 实现文档内容的缓存机制
- 优化markdown渲染性能 