import React, { useState, useEffect } from 'react';
import styles from './_Dropdown.module.scss'; // Optional: Your custom styles

type Category = 'price' | 'brand' | 'color';

interface SortOption {
  id: string;
  label: string;
  category: Category;
}

const sortOptions: SortOption[] = [
  { id: 'price-low', label: 'Price: Low to High', category: 'price' },
  { id: 'price-high', label: 'Price: High to Low', category: 'price' },
  { id: 'nike', label: 'Nike', category: 'brand' },
  { id: 'adidas', label: 'Adidas', category: 'brand' },
  { id: 'puma', label: 'Puma', category: 'brand' },
  { id: 'red', label: 'Red', category: 'color' },
  { id: 'blue', label: 'Blue', category: 'color' },
  { id: 'green', label: 'Green', category: 'color' }
];

export default function SortingCheckboxes() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(true); // To track collapse state

  const handleCheckboxChange = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const removeOption = (optionId: string) => {
    setSelectedOptions((prev) => prev.filter((id) => id !== optionId));
  };

  // Group checkboxes by category and render them in columns
  const renderCheckboxColumns = () => {
    const categories = Array.from(
      new Set(sortOptions.map((option) => option.category))
    );
    return (
      <div className='row'>
        {categories.map((category) => (
          <div key={category} className='col-md-4'>
            <h5 className='text-capitalize'>{category}</h5>
            {sortOptions
              .filter((option) => option.category === category)
              .map((option) => (
                <div key={option.id} className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id={option.id}
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => handleCheckboxChange(option.id)}
                  />
                  <label className='form-check-label' htmlFor={option.id}>
                    {option.label}
                  </label>
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  // Toggle collapse state when the button is clicked
  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    // Add Bootstrap collapse event listeners to handle icon toggle
    const collapseElement = document.getElementById('checkboxCollapse');
    if (collapseElement) {
      collapseElement.addEventListener('shown.bs.collapse', () =>
        setIsCollapsed(false)
      );
      collapseElement.addEventListener('hidden.bs.collapse', () =>
        setIsCollapsed(true)
      );
    }
  }, []);

  return (
    <div className={`container ${styles.collapseContainer}`}>
      {/* Selected Options as badges */}

      <div className='d-flex justify-content-end'>
        {/* Collapse Button with Chevron Icon */}
        <button
          className='btn btn-outline mb-3'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#checkboxCollapse'
          aria-expanded={!isCollapsed}
          aria-controls='checkboxCollapse'
          onClick={handleCollapseToggle}
        >
          Sort Options{' '}
          <i
            className={`bi ms-2 ${
              isCollapsed ? 'bi-chevron-down' : 'bi-chevron-up'
            }`}
          ></i>
        </button>
      </div>

      {/* Collapsible Section */}
      <div className='collapse' id='checkboxCollapse'>
        <div className={`card card-body ${styles.cardBody}`}>
          <div className='d-flex justify-content-between'>
            <h5 className='mb-5'>Filter by Options</h5>
            {/* Close button inside card-body */}
            <button
              className={`${styles.btnClose} btn btn-primary`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#checkboxCollapse'
              aria-expanded='false'
              aria-controls='checkboxCollapse'
            >
              <i className='bi bi-x-lg'></i>
            </button>
          </div>
          {renderCheckboxColumns()}
        </div>
      </div>
      <div className={`${styles.badges}`}>
        {selectedOptions.map((optionId) => {
          const option = sortOptions.find((opt) => opt.id === optionId);
          return (
            <span
              key={optionId}
              className='badge bg-outline me-2 mb-2'
              style={{ cursor: 'pointer' }}
              onClick={() => removeOption(optionId)}
            >
              {option?.label}
              <span className='ms-2 badge-icon'>
                <i className='bi bi-x'></i>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
