"use client";

import { useState, useRef, type ChangeEvent } from "react";
import jsQR from "jsqr";
import Link from "next/link";

export default function ScanPage() {
    const [scanResult, setScanResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setError(null);
        setScanResult(null);

        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result as string;
            setImageSrc(result);
            scanQRCode(result);
        };
        reader.readAsDataURL(file);
    };

    const scanQRCode = (imageSrc: string) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            if (!context) {
                setError("Could not get canvas context");
                return;
            }

            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, image.width, image.height);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code) {
                setScanResult(code.data);
            } else {
                setError("No QR code found in the image.");
            }
        };
        image.onerror = () => {
            setError("Failed to load image.");
        };
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30">
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        MASSA<span className="text-red-500">.</span>
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            QR Code <span className="text-red-500">Scanner</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Upload an image containing a QR code to instantly decode its contents.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center space-y-8">
                            <div
                                className="w-full max-w-md aspect-video rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:border-red-500/50 hover:bg-white/5 transition-all group relative overflow-hidden"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                {imageSrc ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={imageSrc}
                                        alt="Uploaded QR Code"
                                        className="w-full h-full object-contain p-4"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center space-y-4 p-6 text-center">
                                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <svg className="w-8 h-8 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-white">Click to upload image</p>
                                            <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileUpload}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>

                            {error && (
                                <div className="w-full max-w-md p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex items-center space-x-3">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            )}

                            {scanResult && (
                                <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                                        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Decoded Content</h3>
                                        <div className="bg-black/50 rounded-lg p-4 border border-white/5 break-all font-mono text-red-400 selection:bg-red-500/30">
                                            {scanResult}
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(scanResult);
                                                }}
                                                className="text-xs font-medium text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                </svg>
                                                <span>Copy to clipboard</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
