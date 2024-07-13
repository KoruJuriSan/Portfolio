import { svgComponent, SvgProps } from "./svg-type"

export default function PinterestSvg({ size }: SvgProps): svgComponent {
    return (
        <svg width={size ?? 32} height={size ?? 32} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title>One "P" Handwritten (Pinterest's logo)</title>
            <path d="M30 5V27C30 28.6562 28.6562 30 27 30H11.65C12.2625 28.975 13.05 27.5 13.3625 26.2938C13.55 25.575 14.3188 22.6437 14.3188 22.6437C14.8188 23.6 16.2812 24.4062 17.8375 24.4062C22.4688 24.4062 25.8 20.15 25.8 14.8625C25.8 9.79375 21.6625 6 16.3375 6C9.7125 6 6.2 10.4438 6.2 15.2875C6.2 17.5375 7.4 20.3375 9.3125 21.2313C9.60625 21.3688 9.75625 21.3062 9.825 21.025C9.875 20.8125 10.1375 19.7688 10.25 19.2875C10.2875 19.1313 10.2688 19 10.1438 18.85C9.5125 18.0813 9 16.6688 9 15.35C9 11.9625 11.5625 8.6875 15.9312 8.6875C19.7 8.6875 22.3438 11.2562 22.3438 14.9312C22.3438 19.0812 20.25 21.9562 17.5188 21.9562C16.0125 21.9562 14.8875 20.7125 15.2437 19.1812C15.675 17.3562 16.5125 15.3875 16.5125 14.0688C16.5125 10.7563 11.7937 11.2125 11.7937 15.6313C11.7937 16.9875 12.25 17.9125 12.25 17.9125C10.2875 26.2125 9.99375 26.3188 10.4 29.95L10.5375 30H5C3.34375 30 2 28.6562 2 27V5C2 3.34375 3.34375 2 5 2H27C28.6562 2 30 3.34375 30 5Z"/>
        </svg>
    )
}