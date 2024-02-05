import React, { useDebugValue } from 'react'
import styled from 'styled-components'
import { UseDispatch, useDispatch } from 'react-redux';
import { fetchDataByGenre } from '../store';

const Select = styled.select`
margin-left:5rem;
curosor:pointer;
font-size:1.4rem;
background-color:rgba(0,0,0,0.4);
color:white;
`;

function SelectGenre({ genres, type }) {
    const dispatch = useDispatch();
    return (
        <Select className='flex'
            onChange={(e) => {
                dispatch(fetchDataByGenre({ genre: e.target.value, type: type }))
            }}>
            {genres?.map((genre) => {
                return <option value={genre.id} key={genre.id}>{genre.name}</option>
            })}
        </Select>
    )
}

export default SelectGenre
