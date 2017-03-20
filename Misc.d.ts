interface SharedArrayBuffer {
    slice(begin?: number, end?: number): SharedArrayBuffer;
    readonly length: number;
    readonly byteLength: number;
}

declare var SharedArrayBuffer: {
    prototype: SharedArrayBuffer;
    new(length: number): SharedArrayBuffer;
    readonly length: number;
    readonly byteLength: number;
}


// ImageBitmap declarations

interface ImageBitmap {
    close(): void;
    readonly width: number;
    readonly height: number;
}

declare var ImageBitmap: {
    prototype: ImageBitmap;
    new(): ImageBitmap;
    readonly width: number;
    readonly height: number;
}


interface ImageBitmapRenderingContext {
    readonly canvas: HTMLCanvasElement;
    transferFromImageBitmap(bitmap?: ImageBitmap): void;
}


interface Window {
    createImageBitmap(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGImageElement | Blob | ImageData | ImageBitmap, options: any): Promise< ImageBitmap >;
    createImageBitmap(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGImageElement | Blob | ImageData | ImageBitmap, sx: number, sy: number, sw: number, sh: number, options?: any): Promise< ImageBitmap >;
}

interface Worker {
    createImageBitmap(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGImageElement | Blob | ImageData | ImageBitmap, options: any): Promise< ImageBitmap >;
    createImageBitmap(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGImageElement | Blob | ImageData | ImageBitmap, sx: number, sy: number, sw: number, sh: number, options?: any): Promise< ImageBitmap >;
}


declare var ImageBitmapRenderingContext: {
    prototype: ImageBitmapRenderingContext;
    new(): ImageBitmapRenderingContext;
}
