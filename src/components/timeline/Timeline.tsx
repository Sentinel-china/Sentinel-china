/**
 * Timeline Components (Scheme 1: Spine + Short Connectors)
 * Provides a reusable, aesthetically refined vertical timeline for events.
 * 改进：
 * - 外层容器加宽（max-w-[1320px]）
 * - 卡片宽度自适应网格（移除固定 max-w）
 * - 新增媒体条 MediaStrip（水平滑动显示多张图）
 * - 简化并改良入场动画
 */
import React from "react";
import clsx from "clsx";
import { useInView } from "../../hooks/useInView";
import { ImageModal, useImageModal } from "../ui/image-modal";

/** Accent tone options to color nodes and headings */
export type TimelineTone = "gold" | "blue" | "green" | "red" | "purple" | "orange";

/** Data model for a single timeline item */
export interface TimelineItemData {
  /** Which side the card sits on (relative to the spine) */
  side: "left" | "right";
  /** Accent color tone */
  tone: TimelineTone;
  /** Year number or label */
  year: string | number;
  /** Heading text (shown on the card) */
  title: string;
  /** Content text (paragraph) */
  content: string;
  /** Optional small image icon for the card (avatar-like) */
  iconSrc?: string;
  /** Optional media gallery to be displayed inside the card */
  images?: string[];
}

/** Props for Timeline root component */
export interface TimelineProps {
  /** The list of items to render in order (top to bottom) */
  items: TimelineItemData[];
  /** Optional className for the outer section */
  className?: string;
}

/** Internal helper: tone to color tokens */
const toneMap = {
  gold: {
    solid: "#F7D14B",
    text: "text-[#F7D14B]",
    bg: "bg-[#F7D14B]",
    ring: "ring-[#F7D14B]",
    glow: "bg-[#F7D14B]/30",
    line: "from-transparent to-[#F7D14B]",
  },
  blue: {
    solid: "#4F8DF7",
    text: "text-[#4F8DF7]",
    bg: "bg-[#4F8DF7]",
    ring: "ring-[#4F8DF7]",
    glow: "bg-[#4F8DF7]/30",
    line: "from-transparent to-[#4F8DF7]",
  },
  green: {
    solid: "#22C55E",
    text: "text-[#22C55E]",
    bg: "bg-[#22C55E]",
    ring: "ring-[#22C55E]",
    glow: "bg-[#22C55E]/30",
    line: "from-transparent to-[#22C55E]",
  },
  red: {
    solid: "#EF4444",
    text: "text-[#EF4444]",
    bg: "bg-[#EF4444]",
    ring: "ring-[#EF4444]",
    glow: "bg-[#EF4444]/30",
    line: "from-transparent to-[#EF4444]",
  },
  purple: {
    solid: "#A855F7",
    text: "text-[#A855F7]",
    bg: "bg-[#A855F7]",
    ring: "ring-[#A855F7]",
    glow: "bg-[#A855F7]/30",
    line: "from-transparent to-[#A855F7]",
  },
  orange: {
    solid: "#F97316",
    text: "text-[#F97316]",
    bg: "bg-[#F97316]",
    ring: "ring-[#F97316]",
    glow: "bg-[#F97316]/30",
    line: "from-transparent to-[#F97316]",
  },
};

/**
 * Timeline root: renders spine and rows
 */
export function Timeline({ items, className }: TimelineProps) {
  // 收集所有图片用于模态框
  const allImages = items.flatMap(item => item.images || []);
  const imageModal = useImageModal(allImages);

  return (
    <section
      className={clsx(
        "relative mx-auto max-w-[1320px] px-4 py-16 sm:py-20",
        "text-gray-800 dark:text-white",
        className
      )}
    >
      {/* Spine (gradient + subtle glow) */}
      <TimelineSpine />

      <div className="space-y-6">
        {items.map((it, idx) => (
          <TimelineRow key={idx} item={it} allImages={allImages} imageModal={imageModal} />
        ))}
      </div>

      {/* 图片放大模态框 */}
      <ImageModal
        isOpen={imageModal.isOpen}
        onClose={imageModal.closeModal}
        currentImage={imageModal.currentImage}
        images={allImages}
        currentIndex={imageModal.currentIndex}
        onImageChange={imageModal.changeImage}
      />
    </section>
  );
}

/** Center vertical gradient line with soft glow */
function TimelineSpine() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #F7D14B 0%, rgba(255,255,255,0.8) 50%, #4F8DF7 100%)",
          boxShadow: "0 0 16px rgba(255,255,255,0.12)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-20 blur-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,209,75,0.18) 0%, rgba(255,255,255,0.08) 50%, rgba(79,141,247,0.18) 100%)",
        }}
      />
    </>
  );
}

/**
 * A single row (left/right) with a node, short connector, and card
 * 包含轻微的入场动画
 */
function TimelineRow({ 
  item, 
  allImages, 
  imageModal 
}: { 
  item: TimelineItemData;
  allImages: string[];
  imageModal: ReturnType<typeof useImageModal>;
}) {
  const { ref, visible } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <div
      ref={ref}
      className={clsx(
        // Three-column grid: left | middle(40px) | right
        "grid grid-cols-[1fr_40px_1fr] items-center gap-0",
        "min-h-[104px] py-5",
        // Entrance animation
        visible
          ? "opacity-100 translate-y-0 transition duration-700 ease-out"
          : "opacity-0 translate-y-3"
      )}
    >
      {/* Left column */}
      <div className="pr-4">
        {item.side === "left" ? (
          <TimelineCard item={item} align="right" allImages={allImages} imageModal={imageModal} />
        ) : (
          <span aria-hidden className="block" />
        )}
      </div>

      {/* Middle column: node + short connector */}
      <TimelineNode tone={item.tone} side={item.side} />

      {/* Right column */}
      <div className="pl-4">
        {item.side === "right" ? (
          <TimelineCard item={item} align="left" allImages={allImages} imageModal={imageModal} />
        ) : (
          <span aria-hidden className="block" />
        )}
      </div>
    </div>
  );
}

/** Node in the middle with double-circle and directional short connector */
function TimelineNode({
  tone,
  side,
}: {
  tone: TimelineTone;
  side: "left" | "right";
}) {
  const t = toneMap[tone];

  return (
    <div className="relative h-16">
      {/* Short connector: 20px from center to edge */}
      {side === "left" ? (
        <div
          className={clsx(
            "absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-1/2",
            "bg-gradient-to-l",
            t.line
          )}
        />
      ) : (
        <div
          className={clsx(
            "absolute right-0 top-1/2 -translate-y-1/2 h-0.5 w-1/2",
            "bg-gradient-to-r",
            t.line
          )}
        />
      )}

      {/* Glow behind the node */}
      <span
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "block w-10 h-10 rounded-full blur-md opacity-70",
          t.glow
        )}
        aria-hidden
      />

      {/* Outer circle */}
      <span
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "block w-8 h-8 rounded-full ring-2 bg-transparent",
          t.ring
        )}
        aria-hidden
      />
      {/* Inner circle */}
      <span
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "block w-4 h-4 rounded-full",
          t.bg
        )}
        aria-hidden
      />
    </div>
  );
}

/**
 * Card that holds year, title and content
 * 新增：可选 images 媒体条；卡片宽度自适应
 */
function TimelineCard({
  item,
  align,
  allImages,
  imageModal,
}: {
  item: TimelineItemData;
  /** content alignment: card edge pointing to center */
  align: "left" | "right";
  allImages: string[];
  imageModal: ReturnType<typeof useImageModal>;
}) {
  const t = toneMap[item.tone];

  return (
    <article
      className={clsx(
        "group relative w-full",
        "rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-[2px]",
        "shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
        "p-6 sm:p-7 transition-colors",
        "hover:border-gray-300 dark:hover:border-white/20"
      )}
    >
      {/* Decorative subtle corner gradient */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
        )}
        style={{
          background:
            align === "left"
              ? "linear-gradient(135deg, rgba(79,141,247,0.08) 0%, transparent 40%)"
              : "linear-gradient(225deg, rgba(247,209,75,0.08) 0%, transparent 40%)",
        }}
        aria-hidden
      />

      {/* Title */}
      <h3 className={clsx("text-lg sm:text-xl font-semibold mb-2", t.text)}>
        {item.title}
      </h3>

      {/* Year badge */}
      <div className={clsx("mb-4")}>
        <span
          className={clsx(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-medium",
            "bg-gray-200 dark:bg-gray-900/50 text-gray-800 dark:text-white/90 ring-1 ring-inset ring-gray-300 dark:ring-white/10"
          )}
        >
          <span
            className={clsx("inline-block h-2 w-2 rounded-full", t.bg)}
            aria-hidden
          />
          {item.year}
        </span>
      </div>

      {/* Content */}
      <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-white/85">
        {item.content}
      </p>

      {/* Optional media strip to display images */}
      {Array.isArray(item.images) && item.images.length > 0 ? (
        <MediaStrip images={item.images} allImages={allImages} imageModal={imageModal} />
      ) : null}

      {/* Align guide bar on edge near spine for visual balance */}
      <div
        className={clsx(
          "absolute top-6 bottom-6 w-[3px] rounded-full opacity-70",
          align === "left" ? "left-0" : "right-0"
        )}
        style={{
          background: `linear-gradient(180deg, ${toneMap.gold.solid}33, ${toneMap.blue.solid}33)`,
        }}
        aria-hidden
      />
    </article>
  );
}

/**
 * MediaStrip
 * 水平滚动图片条，支持多张图片
 * 小屏(<640px): 200px × 200px (正方形)
 * ≥640px(sm): 240px × 240px (正方形)
 * 长宽比 1:1 (正方形)
 */
function MediaStrip({ 
  images, 
  allImages, 
  imageModal 
}: { 
  images: string[];
  allImages: string[];
  imageModal: ReturnType<typeof useImageModal>;
}) {
  if (!images || images.length === 0) return null;
  
  // 处理图片点击事件
  const handleImageClick = (src: string) => {
    const globalIndex = allImages.findIndex(img => img === src);
    if (globalIndex !== -1) {
      imageModal.openModal(globalIndex);
    }
  };
  
  return (
    <div className="mt-4 -mx-1 flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory" aria-label="media">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative group shrink-0 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-xl overflow-hidden ring-1 ring-white/10 snap-start"
        >
          <img 
            src={src} 
            className="object-cover w-full h-full cursor-pointer transition-all duration-300 hover:scale-105" 
            alt={`Timeline Image ${idx + 1}`}
            onClick={() => handleImageClick(src)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleImageClick(src);
              }
            }}
          />
          
          {/* 悬停提示 */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none rounded-xl">
            <div className="text-white text-sm font-medium bg-black/60 px-3 py-2 rounded-lg">
              Click to Zoom
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;