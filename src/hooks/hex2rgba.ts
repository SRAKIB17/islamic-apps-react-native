export function hexToRgba(hex: string, alpha = 1) {
    // Remove # if present
    hex = hex?.replace('#', '');

    // Convert hex to RGB
    let r = parseInt(hex?.substring(0, 2), 16);
    let g = parseInt(hex?.substring(2, 4), 16);
    let b = parseInt(hex?.substring(4, 6), 16);

    // Convert alpha from 0-1 range to 0-255 range
    let a = Math.round(alpha * 255);

    // Return RGBA string
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
