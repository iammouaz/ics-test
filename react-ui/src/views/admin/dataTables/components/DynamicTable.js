import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, UnorderedList, ListItem } from '@chakra-ui/react';

const DataTable = ({ columns, data, getRemainingData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const openModal = (row) => {
    setSelectedRowData(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRowData(null);
  };

  const renderNestedData = (data) => {
    if (typeof data === 'object' && data !== null) {
      return (
        <UnorderedList>
          {Object.keys(data).map((key) => (
            <ListItem key={key}>
              <strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong> {Array.isArray(data[key]) ? renderNestedData(data[key]) : String(data[key])}
            </ListItem>
          ))}
        </UnorderedList>
      );
    }
    return <span>{String(data)}</span>;
  };

  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={`col-${column}`}>{column.replace(/_/g, ' ').toUpperCase()}</Th>
            ))}
            <Th>ACTIONS</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data?.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((column, i) => (
                <Td key={`${i}-${column}`}>{row[column] !== undefined ? row[column] : 'N/A'}</Td>
              ))}
              <Td>
                <Button colorScheme="teal" size="sm" onClick={() => openModal(row)}>
                  View Details
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {selectedRowData && (
        <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Row Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {renderNestedData(getRemainingData(selectedRowData))}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default DataTable;
