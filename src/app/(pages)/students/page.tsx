'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

export default function Students() {
  const students = useSelector((state: RootState) => state.students.students);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(students.length / itemsPerPage);
  const indexOfLastStudent = currentPage * itemsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;

  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Container className='page-container'>
      <Title title='Students' />
      <table className=' w-full px-2 py-3 border border-gray-500'>
        <tr>
          <th className=' border border-gray-500'>ID</th>
          <th className=' border border-gray-500'>Name</th>
          <th className=' border border-gray-500'>User Name</th>
          <th className=' border border-gray-500'>Age</th>
        </tr>
        {currentStudents.map((item, index) => (
          <tr key={index} className=' text-center border border-gray-500'>
            <td className=' border border-gray-500'>{item.id}</td>
            <td className=' border border-gray-500'>{item.name}</td>
            <td className=' border border-gray-500'>{item.user}</td>
            <td className=' border border-gray-500'>{item.age}</td>
          </tr>
        ))}
      </table>
      <div className=' flex justify-between items-center gap-4 mt-4'>
        <button
          className={` px-4 py-2 bg-gray-300 rounded-md ${
            currentPage === 1 ? ' opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 bg-gray-300 rounded ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </Container>
  );
}
