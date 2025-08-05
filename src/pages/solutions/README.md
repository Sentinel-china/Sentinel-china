# 解决方案文档系统使用说明

## 概述

这个系统允许您通过点击解决方案页面上的标题来跳转到详细的markdown文档页面。系统将样式和内容分离，便于维护和更新。

## 文件结构

```
src/pages/solutions/
├── SolutionDetail.tsx      # 详情页面组件
├── markdown-styles.css     # 统一的markdown样式
├── markdown-content.ts     # 所有markdown内容
├── README.md              # 本说明文档
└── [其他解决方案].md      # 其他解决方案文档（可选）
```

## 如何添加新的解决方案

### 1. 添加markdown内容

在 `src/pages/solutions/markdown-content.ts` 文件中添加新的解决方案内容：

```typescript
'smart-education': `# Smart Education Platform

## 概述

智慧教育平台是一个现代化的教育管理系统...

## 核心功能

### 1. 在线学习平台
- **课程管理**: 完整的课程创建和管理系统
- **学习追踪**: 学生学习进度跟踪和分析
- **互动功能**: 师生互动和讨论功能
- **评估系统**: 在线考试和作业评估

...
`
```

### 2. 更新Solutions.tsx

在 `src/pages/Solutions.tsx` 中的 `solutions` 数组中添加新的解决方案：

```typescript
{
  id: "smart-education",  // 这个ID必须与markdown文件名匹配
  icon: GraduationCap,
  title: "Smart Education Platform",
  description: "Modern education management system...",
  keyFeatures: [...],
  benefits: [...],
  image: "..."
}
```

### 3. 更新SolutionDetail.tsx

在 `src/pages/solutions/SolutionDetail.tsx` 中的 `solutionConfig` 对象中添加配置：

```typescript
'smart-education': {
  icon: GraduationCap,
  title: "Smart Education Platform",
  description: "Modern education management system...",
  image: "..."
}
```

### 4. 更新markdown-content.ts

在 `src/pages/solutions/markdown-content.ts` 中的 `markdownContent` 对象中添加对应的markdown内容。

## Markdown语法支持

系统支持以下markdown语法：

- **标题**: `#`, `##`, `###`
- **粗体**: `**文本**`
- **列表**: `- 项目`
- **段落**: 普通文本自动转换为段落

## 样式定制

所有样式都在 `markdown-styles.css` 文件中定义，您可以根据需要修改：

- 标题样式
- 文本颜色和字体
- 列表样式
- 响应式设计

## 注意事项

1. **ID匹配**: 解决方案的ID必须与markdown-content.ts中的键名完全匹配
2. **路由配置**: 系统会自动处理路由，无需手动配置
3. **样式统一**: 所有markdown文档都会应用相同的样式
4. **内容更新**: 只需修改markdown-content.ts文件即可更新内容

## 示例

访问 `/solutions/smart-city` 可以查看智慧城市解决方案的详细文档。

## 技术支持

如果您在使用过程中遇到问题，请检查：

1. 文件名是否正确
2. 路由配置是否正确
3. markdown语法是否正确
4. 样式文件是否正确导入 