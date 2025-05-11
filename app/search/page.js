import { Suspense } from 'react';
import SearchResults from './SearchResult';

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading search...</div>}>
      <SearchResults />
    </Suspense>
  );
}
