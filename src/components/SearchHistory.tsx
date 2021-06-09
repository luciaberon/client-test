import React, {useEffect, useState} from 'react';
import { History } from '../types/Data';
import { useHistory } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const SearchHistory:React.FC<{}> = (props) => {

    const [history, setHistory] = useState<History[]>();
    const [show, setShow] = useState<boolean>(false);
    const h = useHistory();
    const changeCity = (city: string) => {
        h?.push(`/${city}`);
        h.go(0);
    }
    useEffect(() => {
        fetch(`https://localhost:44391/api/history`)
        .then(res => res.json())
        .then(res => {    

            const lastSearches = res.slice(res.length-5,res.length);
            setHistory(lastSearches);
        })          
    }, [])
    
    return (
        <>
            <button className="btn btn-dark" onClick={() => setShow(!show)} type="button">
            Previous searches &#43;
            </button>
            {
            show &&
            <Card className="card" style={{ width: '60%' }}>
            <ListGroup>
                {
                    history?.map((item) =>
                        <ListGroup.Item className="link-city" onClick={() => {changeCity(item.city)}} key={item.id}>
                            {item.city}
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
            </Card>
            }
        </>
    )
}

export default SearchHistory;

