import React from 'react';
import styles from './Shoe.module.css';

const Shoe = ( { shoe } ) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardItem}>
                <div>                          
                    <img src={ shoe.photo } alt="Piccture is good" className={styles.cardImage} />
                </div>
                
                <div className={styles.cardHead}>
                    <h3 className={styles.cardHead}>
                        { shoe.name }  
                    </h3>
                </div>
                
                <div>
                    <h3 className={styles.cardPrice}>
                    Price: ${ shoe.price }        
                    </h3>                          
                </div>

                <div>
                    <div className={styles.cardDescrip}>
                        <span>Description:</span> { shoe.description }      
                    </div>                            
                </div>
            </div>
        </div>
    )
}

export default Shoe;
