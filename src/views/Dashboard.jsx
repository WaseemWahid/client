import React, {useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'

const Dashboard = () => {
    const [products, setProducts] = useState()
    const history = useHistory()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err))
    }, [refresh])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products &&
                            products.map((product, i) =>(
                                <tr key={i}>
                                    <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                                    <td>${product.price}</td>
                                    <td>{product.description}</td>
                                    <td><Link to={`/products/${product._id}/edit`}>Edit</Link></td>
                                    <td><button onClick={()=>handleDelete(product._id)}>Delete</button></td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard