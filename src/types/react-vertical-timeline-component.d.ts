declare module 'react-vertical-timeline-component' {
  import { ComponentType, ReactNode, CSSProperties } from 'react';
  
  export interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    layout?: '1-column' | '2-columns';
    animate?: boolean;
    lineColor?: string;
  }
  
  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: string;
    dateClassName?: string;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    iconOnClick?: () => void;
    position?: 'left' | 'right';
    textClassName?: string;
    visible?: boolean;
  }
  
  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}