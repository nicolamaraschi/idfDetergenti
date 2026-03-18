import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as pdfjs from 'pdfjs-dist';
import pdfData from '../data/pdf_sheets.json';
import './ProductSheets.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ProductSheets = () => {
    const { t } = useTranslation();
    const [pdfs, setPdfs] = useState([]);
    const [activePdf, setActivePdf] = useState(null);

    // Load PDF list (static import)
    useEffect(() => {
        setPdfs(pdfData);
    }, []);

    // Generate thumbnail for a PDF URL
    const generateThumb = async (url) => {
        const loadingTask = pdfjs.getDocument(url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: ctx, viewport }).promise;
        return canvas.toDataURL();
    };

    // Load thumbnails when PDFs are set
    useEffect(() => {
        pdfs.forEach(async (pdf) => {
            if (!pdf.thumb) {
                const thumb = await generateThumb(pdf.url);
                setPdfs((prev) =>
                    prev.map((p) => (p.url === pdf.url ? { ...p, thumb } : p))
                );
            }
        });
    }, [pdfs]);

    return (
        <div className="product-sheets-page">
            <h1 className="page-title">{t('productSheets.title')}</h1>
            <p className="page-subtitle" style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
                {t('productSheets.subtitle')}
            </p>
            <div className="grid">
                {pdfs.map((pdf) => (
                    <div
                        key={pdf.url}
                        className="card"
                        onClick={() => setActivePdf(pdf)}
                        role="button"
                        tabIndex={0}
                    >
                        {pdf.thumb ? (
                            <img src={pdf.thumb} alt={pdf.name} className="thumb" />
                        ) : (
                            <div className="thumb placeholder">...</div>
                        )}
                        <div className="card-label">{pdf.name}</div>
                    </div>
                ))}
            </div>

            {activePdf && (
                <div className="modal-backdrop" onClick={() => setActivePdf(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setActivePdf(null)}>
                            ✕
                        </button>
                        <iframe
                            src={activePdf.url}
                            title={activePdf.name}
                            className="pdf-viewer"
                        />
                        <a href={activePdf.url} download={activePdf.name} className="download-btn">
                            ⬇️ {t('productSheets.download')}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSheets;
