import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 10px 0;
`;

const BreadcrumbItem = styled.span`
  color: #333; // Customize the text color
  margin-right: 8px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
    font-weight: bold; // Make the last item bold to indicate the current page
  }
`;

export { BreadcrumbContainer, BreadcrumbItem };
