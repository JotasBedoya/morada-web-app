import styled from 'styled-components';

export const PropertyTypeButtomWrapper = styled.div`
    background-color: ${props => props.selected ? '#4A148C' : '#F3E5F5'};
    background-color: ${props => props.selected ? '#4A148C' : '#F3E5F5'};
   /* ${( {selected}) => selected && `
     background-color: #4A148C
     `} */
    border-radius: 10px;
    min-width: 150px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 0;

    p{
        color: ${props => props.selected ? '#FFF': '#4A148C' };
    }
    &:hover{
        background: #4A148C;
        cursor: pointer;
        svg {
            color: #fff;
        }
        p{
            color: #fff;
        }
    }
`

export const IconWrapper = styled.div`
    margin-top: 20px;

    svg{
        font-size: 2.0em;
        color: ${props => props.selected ? '#FFF': '#4A148C' };
       
    }
`;