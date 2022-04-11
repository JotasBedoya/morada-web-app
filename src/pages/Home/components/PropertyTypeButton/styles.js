import styled from 'styled-components';

export const PropertyTypeButtomWrapper = styled.div`
    background-color: #F3E5F5;
    border-radius: 10px;
    min-width: 150px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 0;

    p{
        color: #4A148C;
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
        color: #4A148C;
       
    }
`;