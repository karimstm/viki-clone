import React, { useState, useContext, createContext } from 'react';
import styles from './EpisodesTabHeader.module.scss';

const ActiveContext = createContext();

function EpisodesTabHeader({ setPage, initialIndex, children, ...restProps }) {
    const [selectedItem, setSelectedItem] = useState(initialIndex);
    return (
        <ActiveContext.Provider value={{ selectedItem, setSelectedItem, setPage }}>
            <div {...restProps}>{children}</div>
        </ActiveContext.Provider>
    )
}

EpisodesTabHeader.Item = function EpisodesTabHeaderItem({ eventKey, children, ...restProps }) {
    const { selectedItem, setSelectedItem, setPage } = useContext(ActiveContext)
    return <span className={selectedItem === eventKey ? styles.activet : ""} onClick={() => {
        setSelectedItem(eventKey); setPage(eventKey)
    }
    }  {...restProps}> {children}</span >
}

export default EpisodesTabHeader;