
import { useEffect, useState } from 'react';

interface Author {
  Name: string;
  ProfileUrl: string;
}

interface ContentItem {
  Id: string;
  Title: string;
  Description: string;
  PublicationDate: string;
  LastModified: string;
  UrlName: string;
  Content: string;
  Author: Author;
  Category: string[];
  Tags: string[];
}

export interface ContentResponse {
  Items: ContentItem[];
  TotalCount: number;
  Count: number;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T,>(url: string): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setState({ data, loading: false, error: null }))
      .catch(error => setState({ data: null, loading: false, error }));
  }, [url]);

  return state;
};

export default useFetch;