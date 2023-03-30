import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border:0;
    padding: 1rem;
    background-color: ${props => props.theme['gray-900']};

    &::placeholder {
      color: ${props => props.theme['gray-500']}

    }

  
  }
  button {
      display: flex;
      align-items: center;
      border:0;
      padding: 1rem;
      background: transparent;
      border: 1px solid ${props => props.theme['green-300']};
      color: ${props => props.theme['green-300']};
      gap: 0.75rem;
      font-weight: bold;
      border-radius: 6px;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${props => props.theme['green-500']};
        border-color: 1px solid ${props => props.theme['green-500']};
        color: ${props => props.theme['white']};
      }
    }
`