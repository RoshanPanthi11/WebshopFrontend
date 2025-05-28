'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const PDFViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(800);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth > 1000 ? 900 : window.innerWidth - 40;
      setWindowWidth(width);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 bg-white z-50' : 'mt-6'} w-full p-4 rounded-lg shadow-md`}>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsFullScreen(!isFullScreen)}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          {isFullScreen ? 'Close Fullscreen' : 'Open Fullscreen'}
        </button>
        {isFullScreen && (
          <button
            onClick={() => setIsFullScreen(false)}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        )}
      </div>

      <div className={`${isFullScreen ? 'h-[90vh] overflow-y-scroll' : 'h-[90vh] overflow-y-scroll'} bg-white`}>
        <Document
          file={fileUrl}
          onLoadSuccess={onLoadSuccess}
          loading={<p className="text-center">Loading PDF...</p>}
          error={<p className="text-center text-red-500">Failed to load PDF.</p>}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div key={`page_${index + 1}`} className="mb-6 flex justify-center">
              <Page
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={windowWidth}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;
 