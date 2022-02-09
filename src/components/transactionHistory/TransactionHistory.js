import PropTypes from "prop-types";

function Transaction({items}) { 
//    props = {id, type, amount, currency}
    return <table className="transaction-history">
        <thead style={{background: 'skyblue'}}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }, ind) => { 
            
                return (
                    <tr key={id} style={{background: ind % 2 === 0 ? 'grey' : 'white'} }>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
    </tr>
                )
            })
         
           }
        </tbody>
        </table>
}

Transaction.propTypes = { 
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }
        )
    )

}

export default Transaction