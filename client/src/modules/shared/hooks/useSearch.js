/* eslint-disable id-length */
import _ from 'underscore';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';


export default function useSearch ({
  source = [],
  keys = [],
  allOnEmpty = true
}) {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fuse = new Fuse(source, {
    keys
  });

  useEffect(() => {
    const trimmedInputValue = inputValue.trim();
    const results = fuse.search(trimmedInputValue);
    setSearchResults(_(results).pluck('item'));

    if (!trimmedInputValue && allOnEmpty) {
      setSearchResults(source);
    }
  }, [inputValue, source]);

  useEffect(() => {
    if (allOnEmpty) {
      setSearchResults(source);
    }
  }, [source.length]);

  return {searchResults, setInputValue};
}
