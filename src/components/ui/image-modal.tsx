/**
 * ImageModal 组件
 * 提供图片点击放大功能，支持键盘导航和响应式设计
 */
import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

export interface ImageModalProps {
  /** 是否显示模态框 */
  isOpen: boolean;
  /** 关闭模态框的回调 */
  onClose: () => void;
  /** 当前显示的图片URL */
  currentImage: string;
  /** 所有图片列表 */
  images: string[];
  /** 当前图片在列表中的索引 */
  currentIndex: number;
  /** 切换图片的回调 */
  onImageChange: (index: number) => void;
}

export function ImageModal({
  isOpen,
  onClose,
  currentImage,
  images,
  currentIndex,
  onImageChange,
}: ImageModalProps) {
  // 键盘事件处理
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) {
            onImageChange(currentIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (currentIndex < images.length - 1) {
            onImageChange(currentIndex + 1);
          }
          break;
      }
    },
    [isOpen, currentIndex, images.length, onClose, onImageChange]
  );

  // 注册键盘事件监听
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // 阻止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 点击背景关闭
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 导航按钮处理
  const goToPrevious = () => {
    if (currentIndex > 0) {
      onImageChange(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      onImageChange(currentIndex + 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black/90 backdrop-blur-sm",
        "transition-opacity duration-300"
      )}
      onClick={handleBackdropClick}
    >
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className={clsx(
          "absolute top-4 right-4 z-10 p-2 rounded-full",
          "bg-black/50 text-white hover:bg-black/70",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-white/50"
        )}
        aria-label="关闭图片"
      >
        <X size={24} />
      </button>

      {/* 左侧导航按钮 */}
      {images.length > 1 && currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className={clsx(
            "absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full",
            "bg-black/50 text-white hover:bg-black/70",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-white/50"
          )}
          aria-label="上一张图片"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* 右侧导航按钮 */}
      {images.length > 1 && currentIndex < images.length - 1 && (
        <button
          onClick={goToNext}
          className={clsx(
            "absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full",
            "bg-black/50 text-white hover:bg-black/70",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-white/50"
          )}
          aria-label="下一张图片"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* 图片容器 */}
      <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center p-4">
        <img
          src={currentImage}
          alt={`图片 ${currentIndex + 1}`}
          className={clsx(
            "max-w-full max-h-full object-contain",
            "rounded-lg shadow-2xl",
            "transition-transform duration-300"
          )}
          onClick={(e) => e.stopPropagation()}
        />

        {/* 图片计数器 */}
        {images.length > 1 && (
          <div
            className={clsx(
              "absolute bottom-4 left-1/2 -translate-x-1/2",
              "px-3 py-1 rounded-full text-sm",
              "bg-black/70 text-white/90"
            )}
          >
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* 缩略图导航 (当图片数量>1时显示) */}
      {console.log('ImageModal images.length:', images.length, 'images:', images)}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2 px-4 z-20 bg-black/30 rounded-lg backdrop-blur-sm">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => onImageChange(index)}
              className={clsx(
                "shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200",
                // 根据图片数量调整缩略图大小
                images.length <= 6 ? "w-16 h-16" : images.length <= 10 ? "w-12 h-12" : "w-10 h-10",
                index === currentIndex
                  ? "border-white/80 opacity-100 scale-110"
                  : "border-white/30 opacity-60 hover:opacity-80 hover:scale-105"
              )}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * 图片点击放大功能的Hook
 * 管理模态框状态和图片切换逻辑
 */
export function useImageModal(images: string[]) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number = 0) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const changeImage = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  return {
    isOpen,
    currentIndex,
    currentImage: images[currentIndex] || '',
    openModal,
    closeModal,
    changeImage,
  };
}
